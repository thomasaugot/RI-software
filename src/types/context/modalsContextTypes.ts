import { Dispatch, SetStateAction } from "react";

export type modals = {
    hireWorkerModalIsOpen: boolean,
    setHireWorkerModalIsOpen: Dispatch<SetStateAction<boolean>>
}

export type modalsProviderProps = {
    children: React.ReactNode
}