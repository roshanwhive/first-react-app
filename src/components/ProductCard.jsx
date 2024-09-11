/* eslint-disable react/prop-types */
const ProductCard = ({ productData }) => {
  console.log(productData);
  return (
    <>
      <div className="col-lg-3 col-md-5">
        <div className="single-product">
          <img
            className="img-fluid"
            src={productData?.images?.[0]}
            alt={productData?.title}
          />
          <div className="product-details">
            <h6>{productData?.title}</h6>
            <div className="price">
              <h6>{productData?.price}</h6>
              <h6 className="l-through">$210.00</h6>
            </div>
            <div className="prd-bottom">
              <a href="" className="social-info">
                <span className="ti-bag"></span>
                <p className="hover-text">add to bag</p>
              </a>
              <a href="" className="social-info">
                <span className="lnr lnr-heart"></span>
                <p className="hover-text">Wishlist</p>
              </a>
              <a href="" className="social-info">
                <span className="lnr lnr-sync"></span>
                <p className="hover-text">compare</p>
              </a>
              <a href="" className="social-info">
                <span className="lnr lnr-move"></span>
                <p className="hover-text">view more</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
