import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./BaseLayout.scss";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { updateStatus } from '../../queries/generalQueries';
import { useNavigate } from "react-router-dom";

const BaseLayout: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  const navigate = useNavigate();

  setInterval(() => {
    const responce = updateStatus()
    
    if(responce){
      responce.then((data) => {
        localStorage.setItem("token", data.result.access_token);
      }) 
    }else{
      localStorage.setItem("token", '');
      navigate('/login');
    }

    
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
