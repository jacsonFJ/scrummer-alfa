import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputField from "../../Components/Forms/InputField";
import { LoginAnchor, Block, Form, LoginHeader, ScrummerBotton } from "../Login/LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";
import { Input } from "../../Components/Forms/InputText";
import http from "../../helpers/http";


export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const subtmitAction = async (data) => {
    await http.get('/sanctum/csrf-cookie');

    http.post('/api/signup', data)
      .then(() => navigate('/projetos'))
      .catch(error => {

        if (error.response?.data?.message === 'Dados inválidos!') {
          error.response.data.errors.forEach(
            (errorItem) => setError(errorItem.field, { type: 'server', message: errorItem.error })
          );
        } else {
          alert('Erro desconhecido!');
        }

      });
  };

  return (
    <>
      <LoginHeader title="Cadastre-se no Scrummer" />
      <Form onSubmit={handleSubmit(subtmitAction)}>
        <InputField title="Nome" error={errors.name?.message}>
          <Input {...register('name')} />
        </InputField>
        <InputField title="E-mail" error={errors.email?.message}>
          <Input {...register('email')} />
        </InputField>
        <InputField title="Senha" error={errors.password?.message}>
          <Input type="password" {...register('password')} />
        </InputField>
        <InputField title="Confirmar senha" error={errors.confirm_password?.message}>
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
