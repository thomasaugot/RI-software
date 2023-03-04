import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation/Confirmation";
import Login from "./pages/Login/Login";
import SingUpForm from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Hierachy from "./pages/hierarchy/Hierarchy";
import Protected from "./components/Protected/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SingUpForm />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/confirmation/:email" element={<Confirmation />} />
      <Route path="/hierarchy" element={<Hierachy />} />
      <Route path="/" element={<Protected><Home/></Protected>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default Router;
