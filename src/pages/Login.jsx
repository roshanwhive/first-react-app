import LoginForm from "../sections/login/LoginForm";
import Breadcrumb from "../sections/shop/BannerShop";

const Login = () => {
  return (
    <>
      <Breadcrumb title="Login" link="Auth" link1="login" />

      <LoginForm />
    </>
  );
};

export default Login;
