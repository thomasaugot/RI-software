import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmation from "./components/Confirmation"
import SignUp from './components/SignUp'
import Login from "./components/Login";
import Chats from "./routes/chats/Chats";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/confirmation/:email" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
