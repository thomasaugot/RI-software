import { ReactNode } from 'react';

export type whoAmIType = {
  id: number
}

export type modalProps = {
  closeModal: () => void,
  closeButton?: boolean,
  open: boolean,
  additionalClass: string,
  children: ReactNode
}

export type MoveWorkerFetchTypes = {
  team: boolean,
  newLeaderUserId: number,
  employeeToBeMovedUserId: number
}

export type DropDownType = {
  icon: React.SVGAttributes<ReactNode>,
  text: string,
  editIcon?: React.SVGAttributes<ReactNode>,
  options: OptionType[]
  pipelineOptions?: string[]
  textIcon: ReactNode
}
export type OptionType = {
  value: string,
  text: string,
  icon: ReactNode
}
//
//
//

export type inputFieldProps = {
  type: string;
  placeholder?: string;
  name: string;
  isSearch?: boolean;
  minLength?: number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  label?: string | null;
};

export enum buttonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export type submitbuttonProps = {
  text: string;
  type?: buttonType;
  onClick?: () => void;
};

export type textProps = {
  text: string;
  color?: string;
};

export type checkBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label: string
};


export type paginationButtonsProps = {
  number: number,
  setNum: any
}

export type formErrorProps = {
  errorText: string,
  appear: boolean
}

type confirmationModalButton = {
  text: string,
  onClickHandler: Function
}

export type confirmationModalProps = {
  title: string,
  buttons: confirmationModalButton[],
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}