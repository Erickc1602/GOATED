import React, { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";

function ClearCartButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return <button onClick={handleClick}>Clear Cart</button>;
}

export default ClearCartButton;
