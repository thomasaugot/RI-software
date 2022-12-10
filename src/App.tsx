import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./routes/registration/Registration";
import Confirmation from "./routes/confirmation-email/ConfirmationEmail";
import Hierachy from "./routes/hierarchy/Hierarchy";
import Chats from "./routes/chats/Chats";
import LoginForm from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registrationPage" element={<Registration />} />
          <Route path="/confirmationPage" element={<Confirmation />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/hierarchy" element={<Hierachy />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
