import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation/Confirmation";
import Login from './pages/Login/Login'
import SingUpForm from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

const Router: FC = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SingUpForm />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/" element={<Home />} />
      <Route path="/confirmation/:email" element={<Confirmation />} />
    </Routes>
  );
};

export default Router;
