export type hierarchyItem = {
    employee_id: number, 
    userId: number,
    avatar_link: string,
    name: string,
    position: string,
    active?: boolean,
    inTeam: boolean
}

export type HierarchyUserCardProps = {
    name: string,
    position: string,
    url?: string,
    id: number,
    hierarchy: hierarchyItem[][],
    setHierarchy: React.Dispatch<React.SetStateAction<hierarchyItem[][]>>,
    level: number,
    active?: boolean
    index: number,
    inTeam: boolean,
    setHierarchyLevel: React.Dispatch<React.SetStateAction<number>>,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    isActive: boolean,
    hierarchyLevel: number
}