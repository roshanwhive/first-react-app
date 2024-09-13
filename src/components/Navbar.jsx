import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header
        className="header_area sticky-header"
        style={{ position: "fixed" }}
      >
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}

              <Link className="navbar-brand logo_h" to="/">
                <img src="/assets/img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                          Shop Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="single-product.html">
                          Product Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="checkout.html">
                          Product Checkout
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="cart.html">
                          Shopping Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="confirmation.html">
                          Confirmation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" href="blog.html">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="single-blog.html">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="tracking.html">
                          Tracking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="elements.html">
                          Elements
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link href="#" className="cart">
                      <span className="ti-bag"></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
