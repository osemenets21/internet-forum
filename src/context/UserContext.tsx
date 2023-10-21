import { createContext, useContext, useEffect, useState } from "react";

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
};

type Props = {
    children: JSX.Element;
}

export type UserContextType = {
  users?: UserType[];
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: Props) => {
    const [users, setUsers] = useState<UserType[] | undefined>()

    
const getUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) throw new Error(`Can't get users from server`)

        const {users} = await response.json()

        console.log(users);
    

    } catch (error) {
        console.log(error);
    }
}

    useEffect(() => {
        getUsers();
    }, [])

    return(
        <UserContext.Provider value={{users}}>
            {children}
        </UserContext.Provider>
    )
}

