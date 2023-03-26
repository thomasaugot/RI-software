import { Dispatch, SetStateAction } from "react";

export type modals = {
    hireWorkerModalIsOpen: boolean,
    setHireWorkerModalIsOpen: Dispatch<SetStateAction<boolean>>,
    companisListModalIsOpen: boolean,
    setCompanisListModalIsOpen: Dispatch<SetStateAction<boolean>>,
    createCompanyIsOpen: boolean,
    setCreateCompanyIsOpen: Dispatch<SetStateAction<boolean>>,
    hireWorkerLeader: number,
    setHireWorkerLeader: Dispatch<SetStateAction<number>>,
}

export type modalsProviderProps = {
    children: React.ReactNode
}