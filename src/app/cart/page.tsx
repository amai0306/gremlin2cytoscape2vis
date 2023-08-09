import React from "react";
//import ShowName from './compo';
import CartItem from "./compo";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      {/**<ShowName name='토마토' /> **/}
      <CartItem />
    </div>
  );
}
