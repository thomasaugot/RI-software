import { ReactNode } from "react"


export type ProjectCardType = {
    title: string,
    organisation: string,
    amount: number,
    avatar: React.SVGAttributes<ReactNode>
}