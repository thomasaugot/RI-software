import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmationForm from "./pages/Confirmation/ConfirmationEmail";
import SingUpForm from "./pages/SignUp/SignUpForm";



const Router: FC = () => {
    return <Routes>

        <Route path="/register" element={<SingUpForm />} />
        <Route path='/confirm' element={<ConfirmationForm/>} />

    </Routes>

}

export default Router;