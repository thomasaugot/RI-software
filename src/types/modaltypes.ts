export type ModalProps = {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    requestClose?: () => void;
    showClose?: boolean;
  }

export type MoveWorkerFetchTypes = {
  team: boolean,
  newLeaderUserId: number,
  employeeToBeMovedUserId: number
}