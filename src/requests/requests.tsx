import { api } from "../services/services";

export const getProducts = () => {
  async function fetchData() {
    try {
      const response = await api.get("products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
};
getProducts();
