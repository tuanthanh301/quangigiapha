import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import ListMember from "./pages/ListMember/ListMember";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/Register";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./rootStore";
import { PersistGate } from "redux-persist/integration/react";
import Tree from "./pages/Tree/Tree";

const RootRoute = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
  return (
    <div>
      {userInfor ? (
        <>
          <Header />
          <Routes>
            <Route path="/tree" element={<Tree />} />
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ListMember />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </div>
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
