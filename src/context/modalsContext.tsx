import { createContext, useState, FC } from "react";
import { modals, modalsProviderProps } from '../types/context/modalsContextTypes';

export  const ModalsContext = createContext<modals>({} as modals);


const ModalsProvider: FC<modalsProviderProps> = ({ children }) => {
    const [hireWorkerModalIsOpen, setHireWorkerModalIsOpen] = useState(false);

    return (
        <ModalsContext.Provider value={{ hireWorkerModalIsOpen, setHireWorkerModalIsOpen }}>
            { children }
        </ModalsContext.Provider>
    )
}   

export default ModalsProvider;