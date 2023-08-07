import { styled } from 'styled-components';

import logo from '../../assets/logo-scrummer.png';
import Colors from '../../Colors';
import { Link } from 'react-router-dom';

const Header = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled.h1`
  margin-top: 45px;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: 300;
  color: ${Colors.secondary900};
`;

export const Form = styled.form`
  display: flex;
  width: 308px;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};
  margin-top: 76px;
`;

export const Block = styled.div`
  display: flex;
  width: 308px;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  color: ${Colors.secondary900};
  font-size: 16px;
  margin-top: 34px;
`;

export const LoginAnchor = styled(Link)`
  color: ${Colors.neutral500};
  font-size: 16px;
  text-decoration: none;
`;

const Botton = styled.div`
  width: 100%;
  color: ${Colors.secondary900};
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 76px;
`;

export function LoginHeader(props) {
  return (
    <Header>
      <LogoImage src={logo} alt="Logotipo Scrummer" />
      <Title>{props.title}</Title>
    </Header>
  );
}

export function ScrummerBotton() {
  return <Botton>© Scrummer 2023</Botton>
}
