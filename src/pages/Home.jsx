import Features from "../sections/home/Features";
import HomeBanner from "../sections/home/HomeBanner";
import LatestProduct from "../sections/home/LatestProduct";
import StartCategory from "../sections/home/StartCategory";
import Breadcrumb from "../sections/shop/BannerShop";
const Home = () => {
  return (
    <>
      <Breadcrumb title="Home" link="Home" link1="/" />

      <HomeBanner />
      <Features />

      <StartCategory />

      <LatestProduct />
    </>
  );
};

export default Home;
