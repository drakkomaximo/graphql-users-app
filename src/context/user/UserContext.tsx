import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  usersList: IUser[];
  addNewUser: ({ user }: { user: IUser }) => void;
  createUsersList: ({users}:{users: IUser[]}) => void;
}

export const UserContext = createContext({} as ContextProps);
