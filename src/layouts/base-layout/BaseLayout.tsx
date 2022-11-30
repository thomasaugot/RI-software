import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Nav from "../../components/shared/nav/Nav";

import "./BaseLayout.scss";

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <div className="base-layout-container">
      <div>
        <Nav heading="Store Panel" />
      </div>
      <div className="content">{children ?? <></>}</div>
    </div>
  );
};

export default BaseLayout;
