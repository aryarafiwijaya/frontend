import LandingPage from "../src/pages/landing/landing.js";
import LoginPage from "../src/pages/login/login.js";
import RegisterPage from "../src/pages/register/register.js";

const NotFound={
  render(){
    return '<h1>404 - Page Not Found</h1>';
  },
};

const routes = {
  "/": new LandingPage(), // halaman utama
  login: new LoginPage(), // #/login → "login"
  register: new RegisterPage(), // #/register → "register"4
  "404": NotFound,
};

export default routes;
