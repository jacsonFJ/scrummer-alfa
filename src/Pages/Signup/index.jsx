import InputField from "../../Components/Forms/InputField";
import { LoginAnchor, Block, Form, LoginHeader, ScrummerBotton } from "../Login/LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";
import { Input } from "../../Components/Forms/InputText";


export default function Signup() {
  return (
    <>
      <LoginHeader title="Cadastre-se no Scrummer" />
      <Form>
        <InputField title="Nome">
          <Input />
        </InputField>
        <InputField title="E-mail">
          <Input />
        </InputField>
        <InputField title="Senha">
          <Input />
        </InputField>
        <InputField title="Confirmar senha">
          <Input />
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
