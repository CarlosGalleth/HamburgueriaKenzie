import { useForm } from "react-hook-form";
import { InputContainer } from "../../pages/loginPage/loginPageStyled";
import { formSchema } from "../../pages/loginPage/yupValidation/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/services";
import { iLoginFormData } from "../../types/types";

export const FormComponent = ({ navigate }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(formSchema()),
  });
  function getData(data: any) {
    async function fetchData() {
      try {
        const response = await api.post("login", data);
        response.status === 200 &&
          navigate(`dashboard/${response.data.user.name}`);
        localStorage.setItem("@TOKEN", response.data.accessToken);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  return (
    <form onSubmit={handleSubmit(getData)}>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email..."
          autoComplete="off"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="name">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha..."
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </InputContainer>
      <button>Logar</button>
    </form>
  );
};
