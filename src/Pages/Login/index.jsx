import InputField from "../../Components/Forms/InputField";
import InputText from "../../Components/Forms/InputText";
import { Block, Form, LoginAnchor, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";


export default function Login() {
  return (
    <>
      <LoginHeader title="Login no Scrummer" />
      <Form>
        <InputField title="E-mail">
          <InputText />
        </InputField>
        <InputField title="Senha">
          <InputText value="****" />
        </InputField>
        <ButtonSuccess width="100%">
          Acessar
        </ButtonSuccess>
        <LoginAnchor href="#">
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
