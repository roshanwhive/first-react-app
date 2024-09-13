/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(10).required(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    // reset();
  };

  return (
    <>
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
                <h3>Log in to enter</h3>
                <form
                  className="row login_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  noValidate="novalidate"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="col-md-12 form-group">
                    <input
                      {...register("email")}
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Username'"
                      required
                    />

                    <p style={{ color: "red", textAlign: "start" }}>
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Password'"
                    />
                    <p style={{ color: "red", textAlign: "start" }}>
                      {errors.password?.message}
                    </p>
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

export default LoginForm;

// neupane.shreejaa@gmail.com
// 9863858636
