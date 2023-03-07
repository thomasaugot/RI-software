import { moveWorker } from './../assets/Icons';
import React from "react"
import { type } from 'os';

export type fieldType = {
  type: string;
  placeholder?: string;
  name: string;
  isSearch?: boolean;
  minLength?: number;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export enum buttonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export type SubmitbuttonProps = {
  text: string;
  type?: buttonType;
  onClick?: ()=> void
};

export type TextProps = {
  text: string;
  color?: string;
};

export type checkboxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checkedText?: string;
  label: string
  gap?: string;
  size?: string | number;
  fontSize?: string;
  setCheckedText?: React.Dispatch<React.SetStateAction<string>>
};

export type LoginType = {
  email: string;
  password: string;
};

export type MyFormProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
};

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



