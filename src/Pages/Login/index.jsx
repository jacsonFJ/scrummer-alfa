import InputField from "../../Components/Forms/InputField";
import InputText from "../../Components/Forms/InputText";
import { Anchor, Block, Form, LoginHeader, ScrummerBotton } from "./LoginComponents";
import { ButtonSuccess } from "../../Components/Buttons";


export default function Login() {
  return (
    <>
      <LoginHeader />
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
        <Anchor href="#">
          Esqueci minha senha!
        </Anchor>
      </Form>
      <Block>
        Novo no Scrummer? <Anchor href="#">Crie sua Conta</Anchor>
      </Block>
      <ScrummerBotton />
    </>
  );
}
