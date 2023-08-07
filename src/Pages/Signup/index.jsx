import InputField from "../../Components/Forms/InputField";
import InputText from "../../Components/Forms/InputText";
import { LoginAnchor, Block, Form, LoginHeader, ScrummerBotton } from "../Login/LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";


export default function Signup() {
  return (
    <>
      <LoginHeader title="Cadastre-se no Scrummer" />
      <Form>
        <InputField title="Nome">
          <InputText />
        </InputField>
        <InputField title="E-mail">
          <InputText />
        </InputField>
        <InputField title="Senha">
          <InputText />
        </InputField>
        <InputField title="Confirmar senha">
          <InputText />
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
