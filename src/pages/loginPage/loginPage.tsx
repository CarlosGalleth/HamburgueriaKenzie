import {
  BottomContainer,
  InputContainer,
  LoginBackground,
  LoginMain,
} from "./loginPageStyled";
import { BrandComponent } from "../../components/brandComponent";
export const LoginPage = () => {
  return (
    <LoginBackground>
      <LoginMain>
        <BrandComponent />
        <section>
          <h3>Login</h3>
          <form>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Digite seu nome..." />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Senha</label>
              <input type="password" placeholder="Digite sua senha..." />
            </InputContainer>
            <button>Logar</button>
          </form>
          <BottomContainer>
            <small>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </small>
            <button>Cadastrar</button>
          </BottomContainer>
        </section>
      </LoginMain>
    </LoginBackground>
  );
};
