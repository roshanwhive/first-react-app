/* eslint-disable no-unused-vars */
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
const LatestProduct = () => {
  const [productData, setProductData] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProductData(response?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };
  return (
    <>
      <section className="active-product-area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Latest Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <OwlCarousel className="owl-theme" {...options}>
            {/* <!-- single product slide --> */}
            <div className="single-product-slider">
              <div className="row">
                {/* <!-- single product --> */}
                {productData?.slice(0, 4)?.map((item) => (
                  <ProductCard key={item?.id} productData={item} />
                ))}
              </div>
            </div>

            {/* <!-- single product slide --> */}
            <div className="single-product-slider">
              <div className="row">
                {/* <!-- single product --> */}
                {productData?.slice(0, 4)?.map((item) => (
                  <ProductCard key={item?.id} productData={item} />
                ))}
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default LatestProduct;
