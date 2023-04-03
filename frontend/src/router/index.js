import { Route, Routes } from "react-router-dom";
import LandingPage from "../modules/auth/index";
import { UserDashboard } from "../modules/user";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/dashboard" element={<UserDashboard/>}></Route>
    </Routes>
  );
}

export default Router;
