import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./ChatBaseLayout.scss";
import NavBar from "../../components/general/navBar/navBar";

const ChatBaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {

  return (
    <div className="base-layout">
      <div>
        <NavBar />
      </div>
      <div className="base-layout-content">
        <div className="base-layout-container">
          {children ?? <></>}
        </div>
      </div>
    </div>
  );
};

export default ChatBaseLayout;
