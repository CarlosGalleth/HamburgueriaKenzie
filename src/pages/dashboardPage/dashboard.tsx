import { Header } from "../../components/dashboardPage/header";
import { Product, ProductsBackground, ProductsList } from "./dashboardStyled";
import ptest from "../../assets/product-test.png";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <ProductsBackground>
        <ProductsList>
          <Product>
            <div>
              <img src={ptest} alt="" />
            </div>
            <div>
              <h3>Hamburguer</h3>
              <p>Sanduíches</p>
              <h4>R$ 14.00</h4>
              <button>Adicionar</button>
            </div>
          </Product>
        </ProductsList>
      </ProductsBackground>
    </>
  );
};
