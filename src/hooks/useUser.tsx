import { useContext } from "react";
import { UserContext } from "../context/user";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_NEW_USER, DELETE_USER, GET_USERS, UPDATE_OLD_USER } from "../graphqlQueries";
import { notification } from "../utils";

export const useUser = () => {
  const { addNewUser, updateUser, setUserToUpdate, deleteUser } = useContext(UserContext);
  const {
    data: dbUsers,
    error: dbUsersError,
    loading: isDbUsersLoading,
  } = useQuery(GET_USERS);
  const [triggerCreateNewUser] = useMutation(CREATE_NEW_USER, {
    onCompleted(data) {
      const { id, name, email, gender, status } = data.createUser.user;
      const newUser = {
        id,
        name,
        email,
        gender,
        status,
      };
      addNewUser({ user: newUser });
      notification({
        text: "User has been created",
        type: "success",
      });
    },
    onError(error) {
      notification({
        text: error.message,
        type: "error",
      });
    },
  });
  const [triggerUpdateOldUser] = useMutation(UPDATE_OLD_USER, {
    onCompleted(data) {
      const { id, name, email, gender, status } = data.updateUser.user;
      const updatedUser = {
        id,
        name,
        email,
        gender,
        status,
      };
      updateUser({ user: updatedUser });
      setUserToUpdate({user: null})
      notification({
        text: "User has been updated",
        type: "success",
      });
    },
    onError(error) {
      notification({
        text: error.message,
        type: "error",
      });
    },
  });
  const [triggerDeleteOldUser] = useMutation(DELETE_USER, {
    onCompleted(data) {
      const { id } = data.deleteUser.user;
      deleteUser({ id });
      notification({
        text: "User has been deleted",
        type: "success",
      });
    },
    onError(error) {
      notification({
        text: error.message,
        type: "error",
      });
    },
  });

  return {
    triggerCreateNewUser,
    triggerUpdateOldUser,
    triggerDeleteOldUser,
    dbUsersList:
      dbUsers && dbUsers.users && dbUsers.users.nodes
        ? dbUsers.users.nodes
        : [],
    dbUsersError,
    isDbUsersLoading,
  };
};
