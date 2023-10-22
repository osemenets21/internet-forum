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
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  redirect: boolean;
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [token, setToken] = useState<string>("");
  const [redirect, setRedirect] = useState(false); 


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
    <UserContext.Provider value={{ users, token, setToken, redirect, setRedirect }}>{children}</UserContext.Provider>
  );
};
