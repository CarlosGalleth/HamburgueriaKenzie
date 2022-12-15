import { InputContainer } from "../../pages/loginPage/loginPageStyled";
import { api } from "../../services/services";
import { iRegisterFormData } from "../../types/types";

export const FormComponent = ({
  errors,
  register,
  handleSubmit,
  navigate,
}: any) => {
  const getData = (data: iRegisterFormData) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    async function fetchData() {
      try {
        const response = await api.post("users", user);
        response.status === 201 && navigate("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  };

  return (
    <form noValidate onSubmit={handleSubmit(getData)}>
      <InputContainer>
        <label htmlFor="name">Nome</label>
        <input type="text" placeholder="Nome" {...register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          placeholder="Nome"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="name">Senha</label>
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="name">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </InputContainer>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
