import { useState } from "react";
import trashIcon from "../../assets/trash-icon.png";

import { ProductBg, ProductInfo, StyledCartProduct } from "./styledModal";

export const CartProduct = ({ elem, cartList, setCartList }: any) => {
  const [quantity, setQuantity] = useState(0);

  const handleRemove = () => {
    setCartList(
      cartList.filter((product: any) => {
        return product.id !== elem.id;
      })
    );
  };

  return (
    <StyledCartProduct>
      <div>
        <div>
          <ProductBg>
            <img src={elem.img} alt="" />
          </ProductBg>
          <ProductInfo>
            <h3>{elem.name}</h3>
            <div>
              <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
                -
              </button>
              <div>{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </ProductInfo>
        </div>
        <div>
          <button onClick={handleRemove}>
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </div>
    </StyledCartProduct>
  );
};
