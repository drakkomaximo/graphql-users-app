import { IUser } from "../../interfaces";
import { UserState } from ".";

type UserActionType = { type: "[User] Add New User"; payload: IUser };

export const userReducers = (
  state: UserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case "[User] Add New User": 
      return {
        ...state,
        usersList: [...state.usersList.slice(state.usersList.length === 15 ? 1 : 0 ), action.payload],
      };

    default:
      return state;
  }
};