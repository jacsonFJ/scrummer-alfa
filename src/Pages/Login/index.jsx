import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import axios from 'axios';

import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import { Block, Form, LoginAnchor, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";


export default function Login() {
  const {register, handleSubmit} = useForm();

  const http = axios.create({
    baseURL: 'http://localhost',
    headers: {
      'X-Requested0With': 'XMLHttpRequest',
    },
    withCredentials: true,
  });

  const testApi = async () => {
    console.log(await http.get('/sanctum/csrf-cookie'));

    console.log(
      await http.post('/api/login', {
        email: 'teste',
        password: 'teste'
      })
    );

    const response = await http.get('/api/user');
    console.log('===============Logado=====================');
    console.log(response.data);
    console.log('====================================');

    console.log(
      await http.post('/api/logout', {
        email: 'teste',
        password: 'teste'
      })
    );

    try {
      const response2 = await http.get('/api/user');
      console.log('===============Deslogado=====================');
      console.log(response2.data);
      console.log('====================================');
    } catch (error) {
      console.log('================Deslogado====================');
      console.log(error);
      console.log('====================================');
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  const subtmitAction = (data) => {
    console.log(data);
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
        <LoginAnchor to={"/projetos"}>
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
