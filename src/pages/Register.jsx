import Breadcrumb from "../sections/shop/BannerShop";

const Register = () => {
  return (
    <>
      <Breadcrumb title="Register" link="Auth" link1="Register" />
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <img className="img-fluid" src="/assets/img/login.jpg" alt="" />
                <div className="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <a className="primary-btn" href="registration.html">
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Register to enter</h3>
                <form
                  className="row login_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'FullName'"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Email'"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Password"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Password'"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label htmlFor="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="primary-btn"
                    >
                      Log In
                    </button>
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
