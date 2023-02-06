import React, { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";

function ClearCartButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return <button onClick={handleClick}>Clear Cart</button>;
}

export default ClearCartButton;
