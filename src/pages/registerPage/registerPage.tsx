import { Link } from "react-router-dom";
import { BrandComponent } from "../../components/brandComponent";
import { InputContainer } from "../loginPage/loginPageStyled";
import { RegisterBackground, RegisterMain } from "./registerPageStyled";

export const RegisterPage = () => {
  return (
    <RegisterBackground>
      <RegisterMain>
        <BrandComponent />
        <section>
          <div>
            <h3>Cadastro</h3>
            <Link to="/">Retornar para o login</Link>
          </div>
          <form>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Nome" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Email</label>
              <input type="email" placeholder="Nome" autoComplete="off" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Senha</label>
              <input type="password" placeholder="Senha" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">Confirmar Senha</label>
              <input type="password" placeholder="Confirmar Senha" />
            </InputContainer>
            <button>Cadastrar</button>
          </form>
        </section>
      </RegisterMain>
    </RegisterBackground>
  );
};
