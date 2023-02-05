import { Route, Routes, Navigate } from "react-router-dom";
import Payment from "./components/Payment";
import Product from "./pages/Product";
import Sucess from "./pages/Sucess";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { publicRequest } from "./requestServer";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  fetch(publicRequest)
    .then((response) => response.json())
    .then((count) => {});

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<Product />}></Route>
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />}>
        {" "}
      </Route>
      <Route path="/sucess" element={<Sucess />} />
    </Routes>
  );
};

export default App;
