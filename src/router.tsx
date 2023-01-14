import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmationForm from "./pages/Confirmation/ConfirmationEmail";
import Login from "./pages/Login/Login";
import SingUpForm from "./pages/SignUp/SignUpForm";



const Router: FC = () => {
    return <Routes>

        <Route path="/register" element={<SingUpForm />} />
        <Route path='/confirm' element={<ConfirmationForm/>} />
        <Route path="/confirmation/:email" element={<ConfirmationForm />} />
        <Route path='/login' element={<Login/>}/>

    </Routes>

}

export default Router;