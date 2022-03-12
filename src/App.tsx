
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { UnauthenticatedApp } from './unathenticated-app';
import { Screen } from './screens'


function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path={"login"} element={<UnauthenticatedApp />} />
      <Route path={"index"} element={<Screen />} />
      <Route index element={<UnauthenticatedApp />} />
    </Routes>
  </Router>
      
    </div>
    
  );
}

export default App;
