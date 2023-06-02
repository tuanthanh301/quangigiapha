import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import ListMember from "./pages/ListMember/ListMember";
import Drawio from "./pages/Drawio/Drawio";
import LoginPage from "./pages/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListMember />} />
          {/* <Route path="/draw" element={<Drawio />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
