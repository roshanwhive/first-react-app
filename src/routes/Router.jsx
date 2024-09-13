import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";

import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";

const Router = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="shop" element={<Shop />} />
          <Route index element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
