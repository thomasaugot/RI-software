import { workerModalProps } from "./types";

export type Props = {
    id: number;
    isDeleted: any,
    setIsDeleted: (value: boolean) => void;
} & workerModalProps;