import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Profil from "../pages/Profil";
import MockProfil from "../pages/ProfilMock"

function RouteManager(){

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/Profil/12" />}></Route>
            <Route path="/ProfilMock/:id" element={<MockProfil />}></Route>
            <Route path="/Profil/:id" element={<Profil />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager