import { IUser } from "../../interfaces";
import { UserState } from ".";

type UserActionType =
  | { type: "[User] Add New User"; payload: IUser }
  | { type: "[User] Create Users List"; payload: IUser[] }
  | { type: "[User] Set User To Update"; payload: IUser | null }
  | { type: "[User] Update User"; payload: IUser }
  | { type: "[User] Delete User"; payload: number };

export const userReducers = (
  state: UserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case "[User] Add New User":
      return {
        ...state,
        usersList: [
          action.payload,
          ...state.usersList.slice(0, state.usersList.length === 15 ? state.usersList.length - 1 : state.usersList.length),
        ],
      };
    case "[User] Set User To Update":
      return {
        ...state,
        userToUpdate: action.payload,
      };
    case "[User] Create Users List":
      return {
        ...state,
        usersList: [...action.payload],
      };
    case "[User] Update User":
      return {
        ...state,
        usersList: state.usersList.map((user)=>(
          user.id === action.payload.id ? action.payload : user
        )),
      };
    case "[User] Delete User":
      return {
        ...state,
        usersList: state.usersList.filter((user)=>(
          user.id !== action.payload 
        )),
      };

    default:
      return state;
  }
};
