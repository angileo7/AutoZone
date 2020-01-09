import React from "react";
import { GeneralContainer } from "../style/style";

const ShoppingCart = ({ quantity, image, amount }) => {
  return (
    <GeneralContainer color="#23a344">
      <strong>{`Quantity: ${quantity}`}</strong>
      <img src={image} alt="Logo" height="42" width="42"/>
      <div>
        <strong>Price:{amount}</strong>
      </div>
    </GeneralContainer>
  );
}

export default ShoppingCart;
