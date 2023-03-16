import { moveWorker } from './../assets/Icons';
import React from "react"

export type ErrorProps = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  code?: any;
};

export type codeProps = {
  code: any;
};

export type EmailProps = {
  email: any;
};

export type textFieldProps = {
  isSearchInput?: boolean;
  name: string;
  placeholder: string;
};

export type workerModalProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type moveWorkerType = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  leaderId: number;
}

export type workerCardProps = {
    workerNames: string;
    workerPosition: string;
    workerAvatar?: string;
    id: number
    leaderId: number
}

export type moveWorker = {
    leader_id: number;
    team_moving: boolean;
}

export type WorkersSettings = {
  id: number,
  user_id: number,
  position: string,
  name: string,
  avatar_link: string
}

// export type workerResponse = {
//   ok: boolean;
//   description: string;
//   result: [
//     WorkersSettings
//   ];
// }
// export type workerFetch = {
//   ok: boolean,
//   description: string,
//   result: [
//     {
//     id: number,
//     user_id: number,
//     position: string,
//     name: string,
//     avatar_link: string
//   }
// ]
// }
export type workersTypes = {
  id: number;
  user_id: number;
  position: string;
  name: string;
  avatar_link: string;
}

export type workerResponse = {
  ok: boolean;
  description: string;
  result: workersTypes[];
};



