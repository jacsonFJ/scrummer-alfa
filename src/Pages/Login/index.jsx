import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import { Block, Form, LoginAnchor, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";
import http from '../../helpers/http';
import { showMe } from '../../helpers/repositories/userRepository';
import { createUser } from '../../redux/user/slice';

export default function Login() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const subtmitAction = async (data) => {
    await http().get('/sanctum/csrf-cookie');

    try {
      const response = await http().post('/api/login', data);
      localStorage.setItem('access-token', response.data.data.token);

      const meResponse = await showMe();
      dispatch(createUser(meResponse.data.data));
      navigate('/projetos');

    } catch (error) {
      if (error.response?.data?.message === 'Dados inválidos!') {
        error.response.data.errors.forEach(
          (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
        );
      } else {
        alert('Erro desconhecido!');
      }
    }
  };

  // Verifica se já existe um usuário logado
  useEffect(() => {
    showMe()
      .then(response => {
        dispatch(createUser(response.data.data));
        navigate('/projetos');
      })
      .catch(() => {/*apenas ignora*/});
  }, []);

  return (
    <>
      <LoginHeader title="Login no Scrummer" />
      <Form onSubmit={handleSubmit(subtmitAction)}>
        <InputField title="E-mail" error={errors.email?.message}>
          <Input {...register('email')} />
        </InputField>
        <InputField title="Senha" error={errors.password?.message}>
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
