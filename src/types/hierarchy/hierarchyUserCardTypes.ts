import { hierarchyItem } from './generalTypes';

export type hierarchyUserCardProps = {
    name: string,
    position: string,
    url?: string,
    employeeId: number,
    userId: number,
    hierarchy: hierarchyItem[][],
    setHierarchy: React.Dispatch<React.SetStateAction<hierarchyItem[][]>>,
    level: number,
    active?: boolean
    index: number,
    inTeam: boolean,
    setHierarchyLevel: React.Dispatch<React.SetStateAction<number>>,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    isActive: boolean,
    hierarchyLevel: number,
}
