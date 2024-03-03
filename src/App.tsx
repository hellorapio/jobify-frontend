import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

import About from "./pages/About";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact-us"></Route>
          <Route path="pricing"></Route>
          <Route path="categories"></Route>
          <Route path="employers"></Route>
          <Route path="top-5-jobs"></Route>
          <Route path="login"></Route>
          <Route path="sign-up"></Route>
        </Route>
        <Route path="/dashboard">
          <Route path="settings"></Route>
          <Route path="resume"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
