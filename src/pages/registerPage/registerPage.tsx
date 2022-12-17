import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BrandComponent } from "../../components/brandComponent";
import { RegisterBackground, RegisterMain } from "./registerPageStyled";
import { formSchema } from "./yupValidation/yupValodation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormComponent } from "../../components/registerPage/formComponent";
import { iRegisterFormData } from "../../types/types";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const RegisterPage = () => {
  const { token, navigate }: any = useContext(AuthContext);
  token && localStorage.removeItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(formSchema()),
  });

  return (
    <RegisterBackground>
      <RegisterMain>
        <BrandComponent />
        <section>
          <div>
            <h3>Cadastro</h3>
            <Link to="/">Retornar para o login</Link>
          </div>
          <FormComponent
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            navigate={navigate}
          />
        </section>
      </RegisterMain>
    </RegisterBackground>
  );
};
