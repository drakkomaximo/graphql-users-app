import { FC, useReducer } from "react";
import { IUser } from "../../interfaces";
import { UserContext, userReducers } from ".";

export interface UserState {
  usersList : IUser[]
  userToUpdate: IUser | null
}

const USER_INITIAL_STATE: UserState = {
  usersList: [],
  userToUpdate: null
};

export const UserProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, USER_INITIAL_STATE);

  const createUsersList = ({users}:{users: IUser[]}) =>{
    dispatch({
      type: '[User] Create Users List',
      payload: users
    })
  }

  const addNewUser = ({user}:{user: IUser}) =>{
    dispatch({
      type: '[User] Add New User',
      payload: user
    })
  }

  const setUserToUpdate = ({user}:{user: IUser | null}) =>{
    dispatch({
      type: '[User] Set User To Update',
      payload: user
    })
  }

  const updateUser = ({user}:{user: IUser}) =>{
    dispatch({
      type: '[User] Update User',
      payload: user
    })
  }

  const deleteUser = ({id}:{id: number}) =>{
    dispatch({
      type: '[User] Delete User',
      payload: id
    })
  }
  

  return (
    <UserContext.Provider
      value={{
        ...state,
        createUsersList,
        addNewUser,
        setUserToUpdate,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
