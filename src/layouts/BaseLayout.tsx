import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./BaseLayout.scss";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <div className="base-layout">
      <div>
        <NavBar />
      </div>
      <div className="base-layout-content">
        <Header/>
          <div className="base-layout-container">
            {children ?? <></>}
          </div>
        </div>
    </div>
  );
};

export default BaseLayout;
