import imgTest from "../../assets/product-test.png";
import trashIcon from "../../assets/trash-icon.png";

import { ProductBg, ProductInfo, StyledCartProduct } from "./styledModal";

export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <div>
        <div>
          <ProductBg>
            <img src={imgTest} alt="" />
          </ProductBg>
          <ProductInfo>
            <h3>Hamburguer</h3>
            <div>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
          </ProductInfo>
        </div>
        <div>
          <button>
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </div>
    </StyledCartProduct>
  );
};
