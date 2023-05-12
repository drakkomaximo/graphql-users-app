import { useContext } from "react";
import { UserContext } from "../context/user";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_NEW_USER, GET_USERS } from "../graphqlQueries";
import { notification } from "../utils";

export const useUser = () => {
  const { addNewUser } = useContext(UserContext);
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

  return {
    triggerCreateNewUser,
    dbUsersList: dbUsers && dbUsers.users && dbUsers.users.nodes ? dbUsers.users.nodes : [],
    dbUsersError,
    isDbUsersLoading,
  };
};
