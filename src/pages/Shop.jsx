import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Breadcrumb from "../sections/shop/BannerShop";
import ProductList from "../sections/shop/ProductList";

const Shop = () => {
  const productData = useSelector((state) => state.product);

  return (
    <>
      <Navbar />

      <Breadcrumb title="Shop Category" link="Home" link1="Shop" />

      <ProductList />
    </>
  );
};

export default Shop;
