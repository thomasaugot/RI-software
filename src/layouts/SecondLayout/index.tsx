import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import BaseLayout from "../base-layout/BaseLayout";
import profImage from "../../assets/profImage.svg";
import "./second-layout.scss";

const SecondLayout: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <BaseLayout>
      <div className="base__nav">
        <div className="nav__img">
          <img src={profImage} alt="" />
        </div>
      </div>
      <div className="second__content">{children}</div>
    </BaseLayout>
  );
};

export default SecondLayout;
