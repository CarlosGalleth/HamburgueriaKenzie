import { BottomContainer, LoginBackground, LoginMain } from "./loginPageStyled";
import { BrandComponent } from "../../components/brandComponent";
import { FormComponent } from "../../components/loginPage/formComponents";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
export const LoginPage = ({ navigate }: any) => {
  const { token }: any = useContext(AuthContext);
  token && localStorage.removeItem("@TOKEN");

  return (
    <LoginBackground>
      <LoginMain>
        <BrandComponent />
        <section>
          <h3>Login</h3>
          <FormComponent navigate={navigate} />
          <BottomContainer>
            <small>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </small>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
          </BottomContainer>
        </section>
      </LoginMain>
    </LoginBackground>
  );
};
