import * as React from "react";

interface nname {
  name: string;
}
const ShowName: React.FC<nname> = ({ name }) => (
  <div className="cart-item">
    <p>상품명 : {name}</p>
    <p>$40</p>
    <p>1개</p>
  </div>
);

export default function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

//export default ShowName;
