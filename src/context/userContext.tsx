import { createContext, useState, FC } from "react";
import { user, userProviderProps } from '../types/userContextTypes';

export  const UserContext = createContext<user>({} as user);


const UserProvider: FC<userProviderProps> = ({ children }) => {
    const [avatar, setAvatar] = useState('');
    const [id, setId] = useState('');
    const [companyId, setCompanyId] = useState<number>(-1);

    return (
        <UserContext.Provider value={{ avatar, setAvatar, id, setId, companyId, setCompanyId }}>
            { children }
        </UserContext.Provider>
    )
}   

export default UserProvider;
