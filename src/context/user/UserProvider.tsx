import { FC, useReducer } from "react";
import { IUser } from "../../interfaces";
import { UserContext, userReducers } from ".";

export interface UserState {
  usersList : IUser[]
}

const USER_INITIAL_STATE: UserState = {
  usersList: []
};

export const UserProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, USER_INITIAL_STATE);

  const addNewUser = ({user}:{user: IUser}) =>{
    dispatch({
      type: '[User] Add New User',
      payload: user
    })
  }

  const createUsersList = ({users}:{users: IUser[]}) =>{
    dispatch({
      type: '[User] Create Users List',
      payload: users
    })
  }
  

  return (
    <UserContext.Provider
      value={{
        ...state,
        addNewUser,
        createUsersList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
