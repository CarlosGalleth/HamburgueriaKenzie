import { StyledCartList, TotalContainer } from "./styledModal";
import { CartProduct } from "./cartProduct";

export const CartList = () => {
  return (
    <StyledCartList>
      <ul>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ul>
      <TotalContainer>
        <div>
          <h3>Total</h3>
          <h4>R$ 14.00</h4>
        </div>
        <button>Remover Todos</button>
      </TotalContainer>
    </StyledCartList>
  );
};
