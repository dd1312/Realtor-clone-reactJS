import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Signin";
import ForgetPassword from "./Pages/ForgetPassword";
import Offers from "./Pages/Offers";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path="/profile" element={<Profile/>}/>;
        <Route path="/sign-up" element={<SignUp/>}/>;
        <Route path="/sign-in" element={<SignIn/>}/>;
        <Route path="/Forget-Password" element={<ForgetPassword/>}/>;
        <Route path="/offers" element={<Offers/>}/>;
      </Routes>
    </Router>
    </>
  );
}

export default App;
