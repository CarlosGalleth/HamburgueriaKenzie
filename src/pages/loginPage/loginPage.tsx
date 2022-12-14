import { BottomContainer, LoginBackground, LoginMain } from "./loginPageStyled";
import { BrandComponent } from "../../components/brandComponent";
import { FormComponent } from "../../components/loginPage/formComponents";
export const LoginPage = ({ navigate }: any) => {
  const changePage = () => {};
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
            <button onClick={changePage}>Cadastrar</button>
          </BottomContainer>
        </section>
      </LoginMain>
    </LoginBackground>
  );
};
