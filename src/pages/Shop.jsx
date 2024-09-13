import Navbar from "../components/Navbar";
import Breadcrumb from "../sections/shop/BannerShop";
import ProductList from "../sections/shop/ProductList";

const Shop = () => {
  return (
    <>
      <Navbar />

      <Breadcrumb title="Shop Category" link="Home" link1="Shop" />

      <ProductList />
    </>
  );
};

export default Shop;
