import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import { Block, Form, LoginAnchor, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";
import http from '../../helpers/http';


export default function Login() {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const subtmitAction = async (data) => {
    await http.get('/sanctum/csrf-cookie');

    http.post('/api/login', data)
      .then(() => navigate('/projetos'))
      .catch(error => {
        console.error(error);
        alert(error.response?.data?.message ?? 'Erro desconhecido!');
      });
  };

  return (
    <>
      <LoginHeader title="Login no Scrummer" />
      <Form onSubmit={handleSubmit(subtmitAction)}>
        <InputField title="E-mail">
          <Input {...register('email')} />
        </InputField>
        <InputField title="Senha">
          <Input type="password" {...register('password')} />
        </InputField>
        <ButtonSuccess width="100%" type="submit">
          Acessar
        </ButtonSuccess>
        <LoginAnchor to={"/esqueci-minha-senha"}>
          Esqueci minha senha!
        </LoginAnchor>
      </Form>
      <Block>
        Novo no Scrummer? <LoginAnchor to="/cadastrese">Crie sua Conta</LoginAnchor>
      </Block>
      <ScrummerBotton />
    </>
  );
}
