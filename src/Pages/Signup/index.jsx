import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputField from "../../Components/Forms/InputField";
import { LoginAnchor, Block, Form, LoginHeader, ScrummerBotton } from "../Login/LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";
import { Input } from "../../Components/Forms/InputText";
import http from "../../helpers/http";


export default function Signup() {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const subtmitAction = async (data) => {
    await http.get('/sanctum/csrf-cookie');

    http.post('/api/signup', data)
      .then(() => navigate('/projetos'))
      .catch(error => {
        console.error(error);
        alert(error.response?.data?.message ?? 'Erro desconhecido!');
      });
  };

  return (
    <>
      <LoginHeader title="Cadastre-se no Scrummer" />
      <Form onSubmit={handleSubmit(subtmitAction)}>
        <InputField title="Nome">
          <Input {...register('name')} />
        </InputField>
        <InputField title="E-mail">
          <Input {...register('email')} />
        </InputField>
        <InputField title="Senha">
          <Input type="password" {...register('password')} />
        </InputField>
        <InputField title="Confirmar senha">
          <Input type="password" {...register('confirm_password')} />
        </InputField>
        <ButtonSuccess width="100%">
          Confirmar
        </ButtonSuccess>
      </Form>
      <Block>
        Já possui conta no Scrummer? <LoginAnchor to="/login">Login</LoginAnchor>
      </Block>
      <ScrummerBotton />
    </>
  );
}
