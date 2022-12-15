import { StyledCartList, TotalContainer } from "./styledModal";
import { CartProduct } from "./cartProduct";

export const CartList = ({ cartList, setCartList }: any) => {
  const totalValue = cartList.reduce((prev: any, curr: any) => {
    return prev + curr.price;
  }, 0);

  return (
    <StyledCartList>
      <ul>
        {cartList.map((elem: any) => {
          return (
            <CartProduct
              elem={elem}
              cartList={cartList}
              setCartList={setCartList}
            />
          );
        })}
      </ul>
      <TotalContainer>
        <div>
          <h3>Total</h3>
          <h4>R$ {totalValue.toFixed(2)}</h4>
        </div>
        <button onClick={() => setCartList([])}>Remover Todos</button>
      </TotalContainer>
    </StyledCartList>
  );
};
