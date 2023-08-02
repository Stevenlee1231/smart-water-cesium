import "./App.css";
import "./assets/font/HanyiSentyFoundation.css"
import {useState} from 'react'
import { Route, Routes,Navigate } from "react-router";
import { BrowserRouter, HashRouter, HashRouter as Router } from "react-router-dom";
import { UnauthenticatedApp } from "./pages/unathenticated-app";
import { Screen } from "./pages/screens";
import { Rainfall } from "./pages/rainfall/rainfall";
import { Evaporationcapacity } from "./pages/evaporationcapacity/evaporationcapacity";
import { EarthScreen } from "./pages/earth/earth";
import { FormationScreen } from "./pages/formation/formation";

function App() {
  const [token, setToken] = useState<string | undefined>();
    if (!token && sessionStorage.length === 0) {
        return <UnauthenticatedApp saveToken={ setToken } />;
    }
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Screen/>}>
            <Route path="earth" element={<EarthScreen />}></Route>
            <Route path="formation" element={<FormationScreen />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/earth" replace />} />
        </Routes>
    </div>
  );
}

export default App;
