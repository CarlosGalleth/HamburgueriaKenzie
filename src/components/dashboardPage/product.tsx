import { StyledProduct } from "../../pages/dashboardPage/dashboardStyled";

export const Product = ({ elem, cartList, setCartList }: any) => {
  return (
    <StyledProduct key={elem.id}>
      <div>
        <img src={elem.img} alt="" />
      </div>
      <div>
        <h3>{elem.name}</h3>
        <p>{elem.category}</p>
        <h4>R$ {elem.price.toFixed(2)}</h4>
        <button onClick={() => setCartList([...cartList, elem])}>
          Adicionar
        </button>
      </div>
    </StyledProduct>
  );
};
