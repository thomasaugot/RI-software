import React from "react";

export type user = {
    avatar: string,
    setAvatar: React.Dispatch<React.SetStateAction<string>>,
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>,
    companyId: number,
    setCompanyId: React.Dispatch<React.SetStateAction<number>>
}

export type userProviderProps = {
    children: React.ReactNode;
}