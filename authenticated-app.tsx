import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Screen } from "./src/pages/screens";
import { UnauthenticatedApp } from "./src/pages/unathenticated-app";
export const AuthenticatedApp = () => {
  <Router>
    <Routes>
      <Route path={"login"} element={<UnauthenticatedApp />} />
      <Route path={"index"} element={<Screen />} />
      <Route index element={<UnauthenticatedApp />} />
    </Routes>
  </Router>;
};
