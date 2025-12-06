import LandingPage from "../src/pages/landing/landing.js";
import LoginPage from "../src/pages/login/login.js";
import RegisterPage from "../src/pages/register/register.js";
import RuntutanPage from "../src/pages/dashboard/runtutan.js";
import ProgressPage from "../src/pages/dashboard/progress.js";

const routes = {
  "/": new LandingPage(),
  login: new LoginPage(),
  register: new RegisterPage(),
  runtutan: new RuntutanPage(),
  progress: new ProgressPage(),
};

export default routes;
