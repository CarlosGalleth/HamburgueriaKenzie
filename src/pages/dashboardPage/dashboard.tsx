import { Header } from "../../components/dashboardPage/header";
import { ProductsBackground, ProductsList } from "./dashboardStyled";
import { api } from "../../services/services";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../components/dashboardPage/product";
import { AuthContext } from "../../contexts/authContext";
import { Modal } from "../../components/dashboardPage/modal";

export const DashboardPage = () => {
  const { token }: any = useContext(AuthContext);
  const [productList, setProductList] = useState([]);
  const [modal, setModal] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
  }, [productList, token]);

  const RenderAll = () => {
    return productList.map((elem) => (
      <Product
        elem={elem}
        key={elem["id"]}
        cartList={cartList}
        setCartList={setCartList}
      />
    ));
  };

  const RenderFiltered = () => {
    const filteredProducts = productList.filter((product: any) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (
      <>
        {filteredProducts.map((elem) => {
          return (
            <Product
              elem={elem}
              key={elem["id"]}
              cartList={cartList}
              setCartList={setCartList}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {modal && (
        <Modal
          setModal={setModal}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}
      <Header
        setModal={setModal}
        cartList={cartList}
        setSearchValue={setSearchValue}
      />
      <ProductsBackground>
        <ProductsList>
          <>{searchValue === "" ? RenderAll() : RenderFiltered()}</>
        </ProductsList>
      </ProductsBackground>
    </>
  );
};
