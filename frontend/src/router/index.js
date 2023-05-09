import { Route, Routes } from "react-router-dom";
import LandingPage from "../modules/auth/index";
import { UserDashboard } from "../modules/user";
import  Admin  from "../modules/admin/index";

import Content from "../shared/components/layout/body/content"

function Router() {
	
  return (
    <Content>
      <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/dashboard" element={<UserDashboard/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </Content>
  );
}

export default Router;
