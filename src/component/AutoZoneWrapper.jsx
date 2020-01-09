import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import ProductsWrapper from "./ProductsWrapper";
import Sorter from "./Sorter"

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

let ProducList = [
  { id: 1, name: "Coca Cola", amount: 12000, Quantity: 10, image:"data:image/gif;base64,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" },
  { id: 2, name: "Honda NSII", amount: 100000, Quantity: 10  },
  { id: 3, name: "Mapache toy", amount: 2000, Quantity: 10  }
];

function AutoZoneWrapper() {
  let [CartList, setCartList] = useState([]);

  const getProductById = id => {
    return ProducList.find(x => x.id === id);
  };

  useEffect(() => {
    setCartList(JSON.parse(window.localStorage.getItem('CartList')) || [])
  }, [CartList]);

  const addToCart = (item) => { 
    var productFound = CartList.find(function(element) {
      return element.id == item.id;
    });
    if(productFound){
      productFound.quantity = productFound.quantity + 1;
    }else{
      CartList.push({id:item.id, quantity: 1, image: item.image, amount: item.amount})
    }
    window.localStorage.setItem('CartList',JSON.stringify(CartList))
  }

  const sortCart = () => { 
    CartList.reverse()  
  }
  return (
    <>
    <Wrapper>
      <Container>
        Shopping Cart
        <hr />
        <Sorter field={'Price'} orderBy={'↑↓'}/>
        {CartList.map((element, index) => (
          <ShoppingCart key={index} {...element} />
        ))}
      </Container>
      <Container>
        List of products
        <hr />
        {ProducList.map((element, index) => (
          <ProductsWrapper key={index} product={{...getProductById(element.id)}} onClick={addToCart}/>
        ))}
      </Container>
    </Wrapper>
    <Search/>
    </>
  );
}

const Search = ( { id = 0 } ) => {
  const [inputId, setinputId] = useState(id);
  const [depa, setDepa] = useState({});

  const findHome = value => {
    var depaFound = ProducList.find(function(element) {
      return element.id == value;
    });
    console.log(depaFound)
    setDepa(depaFound)
    console.log(depa)
  };

  return (
    <>
      <div>
        <strong>Id:</strong>
        <input
          type="number"
          value={inputId}
          onChange = { e => {setinputId(e.target.value)}}
        />
      </div>
      <input
          type="button"
          onClick={event => findHome(inputId)}
          value="Ver Depa"
        />
      { depa === Object ? <div>True</div> : <div>False</div> }
    </>
  );
}

export default AutoZoneWrapper;
