import "./App.css";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Services from "./components/Services";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.key}>
            <Route path="/" Component={Home} />
            <Route path="/Services" Component={Services} />
            <Route path="Login" Component={Login} />
            <Route path="Register" Component={Register} />
          </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;
