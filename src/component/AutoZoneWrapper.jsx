import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import ProductsWrapper from "./ProductsWrapper";
import Sorter from "./Sorter"
import _ from 'lodash';
import ProducList from  '../Utils/Products'
import Search from './Search'

const Wrapper = Styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    border-color: #FF0364;
    border-style: solid;
    width: 1100px;
`;

const Container = Styled.div`
    border-style: solid;
    padding: 10px 10px 10px 10px;
    width: 4500px;
    margin: 10px;
    border-color: #FF0364;
    border-radius: 10px;
`;

const AutoZoneWrapper = () => {
  let [CartList, setCartList] = useState([]);

  const getProductById = id => {
    return ProducList.find(x => x.id === id);
  };

  useEffect(() => {
    setCartList(JSON.parse(window.localStorage.getItem('CartList')) || [])
  }, [CartList]);

  const filter = (text) =>{
    let filteredProducts = ProducList.filter(function (item) {
        return 0 === item.name.indexOf(text);
    });
  }

  const addToCart = (item) => { 
    var productFound = CartList.find(function(element) {
      return element.id === item.id;
    });
    if(productFound){
      productFound.quantity = productFound.quantity + 1;
    }else{
      CartList.push({id:item.id, quantity: 1, image: item.image, amount: item.amount})
    }
    
    window.localStorage.setItem('CartList',JSON.stringify(_.sortBy(CartList, 'amount')))
  }

  const sortCart = () => { 
    window.localStorage.setItem('CartList',JSON.stringify(CartList.reverse()))
  }
  return (
    <>
    <Wrapper>
      <Container>
        Shopping Cart
        <hr />
        <Sorter field={'Price'} orderBy={'↑↓'} onClick={sortCart}/>
        {CartList.map((element, index) => (
          <ShoppingCart key={index} {...element} />
        ))}
      </Container>
      <Container>
        
    <Search onFilter={filter}/>
        List of products
        <hr />
          {ProducList.map((element, index) => (
          <ProductsWrapper key={index} product={{...getProductById(element.id)}} onClick={addToCart}/>
        ))}
      </Container>
    </Wrapper>
    </>
  );
}

export default AutoZoneWrapper;
