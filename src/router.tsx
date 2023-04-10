import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";
import AcceptInvitationRegister from "./pages/acceptInvintation/register/register";
import AcceptInvitationLogin from "./pages/acceptInvintation/login/login";
import AcceptInvitationConfirmation from "./pages/acceptInvintation/confirmation/confirmation"
import Home from "./pages/Home/Home";
import NotFound from "./pages/notFound/notFound";
import Chat from './pages/chat/chat';
import Login from './pages/login/Login';
import Confirmation from './pages/confirmation/Confirmation';
import Hierachy from './pages/hierarchy/hierarchy';
import SearchWorker from './pages/searchWorker/SearchWorker';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/accept-invitation/register/:token" element={<AcceptInvitationRegister />} />
      <Route path="/accept-invitation/login/:token" element={<AcceptInvitationLogin />} />
      <Route path="/accept-invitation/confirmation/:email/:token" element={<AcceptInvitationConfirmation />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/confirmation/:email" element={<Confirmation />} />
      <Route path="/hierarchy" element={<Hierachy />} />
      <Route path="/search_workers" element={<SearchWorker />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
