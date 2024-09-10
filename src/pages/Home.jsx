import Features from "../sections/home/Features";
import HomeBanner from "../sections/home/HomeBanner";
import StartCategory from "../sections/home/StartCategory";
import Navbar from "../components/Navbar";
import Breadcrumb from "../sections/shop/BannerShop";
const Home = () => {
  return (
    <>
      <Breadcrumb title="Home" link="Home" link1="/" />

      <HomeBanner />
      <Features />

      <StartCategory />
    </>
  );
};

export default Home;
