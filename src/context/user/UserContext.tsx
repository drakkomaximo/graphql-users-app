import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  usersList: IUser[];
  userToUpdate: IUser | null;
  createUsersList: ({users}:{users: IUser[]}) => void;
  addNewUser: ({ user }: { user: IUser }) => void;
  setUserToUpdate: ({ user }: { user: IUser | null }) => void;
  updateUser: ({ user }: { user: IUser }) => void;
  deleteUser: ({id}:{id: number}) => void;
}

export const UserContext = createContext({} as ContextProps);
