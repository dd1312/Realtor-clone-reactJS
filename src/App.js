import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgetPassword from "./Pages/ForgetPassword";
import Offers from "./Pages/Offers";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path="/profile" element={<Profile/>}/>;
        <Route path="/sign-up" element={<SignUp/>}/>;
        <Route path="/sign-in" element={<SignIn/>}/>;
        <Route path="forgetpassword/" element={<ForgetPassword/>}/>;
        <Route path="/offers" element={<Offers/>}/>;
      </Routes>
    </Router>
    </>
  );
}

export default App;
