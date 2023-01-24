import React from "react";

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
};

export type TextProps = {
  text: string;
  color?: string;
};

export type checkboxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type navMenuItem = {
  icon?: JSX.Element;
  name?: string;
  url?: string;
};

export type NavItemProps = {
  index?: number;
  icon?: JSX.Element;
  text?: string;
  url: string;
  menuItems?: navMenuItem[];
};

type subItemProps = {
  name: string;
  url: string;
  enabled: boolean;
};

export type navBarResponse = {
  ok?: boolean;
  description?: string;
  result: navbarProps[];
};

export type navbarProps = {
  name: string;
  url: string;
  enabled: boolean;
  subitems: subItemProps[];
};

export type MyFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
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

export type textFieldProps = {
  isSearchInput?: boolean;
  name: string;
  placeholder: string;
};

export type workerCardProps = {
  workerNames: string;
  workerPosition: string;
  workerAvatar?: string;
};

export type workerResponse = {
  ok: boolean;
  description: string;
  result: [
    {
      id: number;
      user_id: number;
      position: string;
      name: string;
      avatar_link: string;
    }
  ];
};

