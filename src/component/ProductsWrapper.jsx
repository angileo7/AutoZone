import React from "react";
import { GeneralContainer } from "../style/style";

const Productsrapper = ({ onClick, product}) => {
  return (
    <GeneralContainer color="#a9a9ec">
      <div>{`Product name: ${product.name}`}</div>
      <div>{`Product amount: ${product.amount}`}</div>
      <div>{`Product name: ${product.name}`}</div>
      <span onClick={()=>onClick(product)}><strong>add to cart</strong></span>
    </GeneralContainer>
  );
}

export default Productsrapper;
