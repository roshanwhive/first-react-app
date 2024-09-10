/* eslint-disable react/prop-types */
const ProductCard = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-product">
        <img className="img-fluid" src={data?.images?.[0]} alt={data?.title} />
        <div className="product-details">
          <h6>{data?.title}</h6>
          <div className="price">
            <h6>{data?.price}</h6>
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
  );
};

export default ProductCard;
