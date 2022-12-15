import { Header } from "../../components/dashboardPage/header";
import { ProductsBackground, ProductsList } from "./dashboardStyled";
import { api } from "../../services/services";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../components/dashboardPage/product";
import { AuthContext } from "../../contexts/authContext";
import { Modal } from "../../components/dashboardPage/modal";

export const DashboardPage = ({ navigate }: any) => {
  const { token }: any = useContext(AuthContext);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [productList]);

  return (
    <>
      <Modal />
      <Header />
      <ProductsBackground>
        <ProductsList>
          <>
            {productList.map((elem) => (
              <Product elem={elem} key={elem["id"]} />
            ))}
          </>
        </ProductsList>
      </ProductsBackground>
    </>
  );
};
