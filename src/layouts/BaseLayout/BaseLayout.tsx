import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./BaseLayout.scss";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { updateStatusUrl } from "../../utils/network";
import { authorizedRequest } from '../../utils/queries'

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {

  setInterval(() => {
      authorizedRequest(updateStatusUrl, 'PUT').then((data) => {
        localStorage.setItem("token", data.result.access_token);
      })
  }, 5000)

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
