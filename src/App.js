import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import ListMember from "./pages/ListMember/ListMember";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/Register";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./rootStore";
import { PersistGate } from "redux-persist/integration/react";
import Tree from "./pages/Tree/Tree";
import Financial from "./pages/FinancialManagement/Financial";
import Profile from "./pages/Profile/Profile";
import { useEffect } from "react";

const RootRoute = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfor) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [userInfor]);

  return (
    <>
      {userInfor ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tree" element={<Tree />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/list" element={<ListMember />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootRoute />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
