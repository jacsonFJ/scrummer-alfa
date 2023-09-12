import { useForm } from 'react-hook-form';

import InputField from "../../Components/Forms/InputField";
import { Input } from "../../Components/Forms/InputText";
import { Block, Form, LoginAnchor, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";


export default function Login() {
  const {register, handleSubmit} = useForm();

  const subtmitAction = (data) => {
    alert(JSON.stringify(data));
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
