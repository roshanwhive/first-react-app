/* eslint-disable react/prop-types */
const Breadcrumb = ({ title, link, link1, link2 }) => {
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>{title}</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  {link}
                  <span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">
                  {link1}
                  <span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">{link2}</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
