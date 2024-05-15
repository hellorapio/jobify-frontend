import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/NotFound";
import About from "./pages/About";
import { Login } from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
// import ProtectedRoute from "./components/shared/Protect";
import Verify from "./pages/auth/Verify";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact-us" element={<Contact />}></Route>
          {/* <Route path="pricing"></Route> */}
          <Route path="categories" element={<Categories />}></Route>
          <Route path="companies"></Route>
          <Route path="jobs"></Route>
          <Route path="categories"></Route>
        </Route>
        <Route path="/dashboard">
          <Route path="settings"></Route>
          <Route path="resume"></Route>
        </Route>
        <Route path="sign-up" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="verify/:token" element={<Verify />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
