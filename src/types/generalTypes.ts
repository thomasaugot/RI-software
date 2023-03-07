export type whoAmIType = {
    id: number
}

export type ModalProps = {
    closeModal: ()=>void,
    closeButton?: boolean,
    additionalClass?: string
}

export type MoveWorkerFetchTypes = {
  team: boolean,
  newLeaderUserId: number,
  employeeToBeMovedUserId: number
}