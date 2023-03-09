import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profil from "../pages/Profil";
import MockProfil from "../pages/ProfilMock"

function RouteManager(){
    return (
        <Router>
          <Routes>
            <Route path="/ProfilMock/:id" element={<MockProfil />}></Route>
            <Route path="/Profil/:id" element={<Profil />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager