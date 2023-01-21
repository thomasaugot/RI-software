import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation/Confirmation";
import Login from './pages/Login/Login'
import Hierachy from "./pages/hierarchy/Hierarchy";
import SingUpForm from "./pages/SignUp/SignUp";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SingUpForm />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/confirmation/:email" element={<Confirmation />} />
      <Route path="/hierarchy" element={<Hierachy />} />
      
    </Routes>
  );
};

export default Router;
