import { createContext, useContext, useEffect, useState } from "react";

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Props = {
  children: JSX.Element;
};

export type UserContextType = {
  users: UserType[];
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<UserType[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error(`Can't get users from server`);

      const { users } = await response.json();

      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
