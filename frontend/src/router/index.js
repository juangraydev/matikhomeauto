import { Route, Routes } from "react-router-dom";
import { Login, Register } from "../modules/auth/index";
import { UserDashboard } from "../modules/user";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/user/dashboard" element={<UserDashboard/>}></Route>
    </Routes>
  );
}

export default Router;
