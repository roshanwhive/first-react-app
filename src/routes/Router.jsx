import { Route, Routes, useLocation } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import NavbarNew from "../components/NavbarNew";
import AUthLayout from "../layout/AUthLayout";

const Router = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      {location?.pathname === "/login" ? <NavbarNew /> : <Navbar />}

      <Routes>
        <Route path="/" element={<AUthLayout />}>
          <div className=""></div>
          <Route path="/shop" element={<Shop />} />
          <Route index element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
