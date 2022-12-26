import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmation from "./components/Confirmation"
import SignUp from './components/SignUp'
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/confirmation/:email" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
