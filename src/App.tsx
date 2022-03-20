import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { UnauthenticatedApp } from "./pages/unathenticated-app";
import { Screen } from "./pages/screens";
import {Rainfall} from "./pages/rainfall/rainfall";
import  {Evaporationcapacity}  from "./pages/evaporationcapacity/evaporationcapacity";
import { EarthScreen } from "./pages/earth/earth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<UnauthenticatedApp />} />
          <Route path="/" element={<Screen />}>
            <Route path="rainfall" element={<Rainfall />}></Route>
            <Route path="evaporationcapacity" element={<Evaporationcapacity />}></Route>
            <Route path="earth" element={<EarthScreen />}></Route>
          </Route>
          <Route index element={<UnauthenticatedApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
