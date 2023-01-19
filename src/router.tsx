import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation/Confirmation";
import Hierachy from "./pages/hierarchy/Hierarchy";
import SingUpForm from "./pages/SignUp/SignUp";



const Router: FC = () => {
    return <Routes>

        <Route path="/register" element={<SingUpForm />} />
        <Route path='/confirm' element={<ConfirmationForm/>} />
        <Route path="/confirmation/:email" element={<ConfirmationForm />} />

    </Routes>

}

export default Router;