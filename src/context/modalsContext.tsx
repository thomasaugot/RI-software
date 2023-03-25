import { createContext, useState, FC } from "react";
import { modals, modalsProviderProps } from '../types/context/modalsContextTypes';

export  const ModalsContext = createContext<modals>({} as modals);


const ModalsProvider: FC<modalsProviderProps> = ({ children }) => {
    const [ hireWorkerModalIsOpen, setHireWorkerModalIsOpen ] = useState(false);
    const [ companisListModalIsOpen, setCompanisListModalIsOpen ] = useState(false);
    const [ createCompanyIsOpen, setCreateCompanyIsOpen ] = useState(false);
    const [ hireWorkerLeader, setHireWorkerLeader ] = useState(-1);

    return (
        <ModalsContext.Provider value={{ hireWorkerModalIsOpen, setHireWorkerModalIsOpen, companisListModalIsOpen, setCompanisListModalIsOpen, createCompanyIsOpen, setCreateCompanyIsOpen, hireWorkerLeader, setHireWorkerLeader }}>
            { children }
        </ModalsContext.Provider>
    )
}   

export default ModalsProvider;