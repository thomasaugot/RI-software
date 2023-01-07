import { BrowserRouter as Router, useNavigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Confirmation from "./components/Confirmation"
import SignUp from './components/SignUp'
import Login from "./components/Login";
import Chats from "./routes/chats/Chats";
import ProfileUser from "./routes/UserProfile";
import Hierachy from "./routes/hierarchy/Hirearchy";
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/confirmation/:email" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hierarchy" element={<Hierachy />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/profile" element={<ProfileUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
