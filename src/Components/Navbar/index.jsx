import { FiBell } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

import { BtnDropdown, NavbarBlock, NavbarContainer, RightGroup } from "./styles";
import icon from '../../assets/logo-scrummer.png';
import { LogoImage } from "./styles";
import { DropdownItem } from '../Dropdown/styles';

export default function Navbar() {
  return (
    <NavbarBlock>
      <NavbarContainer>
        <LogoImage to='/projetos'>
          <img src={icon} title="Scrummer" />
        </LogoImage>
        <RightGroup>
          <BtnDropdown
              buttonContent={
                <>
                  <FiBell className="navbar-icon" />
                  <TbTriangleInvertedFilled className="navbar-arrow" />
                  </>
            }
          >
            <DropdownItem>
              teste de notificação
            </DropdownItem>
          </BtnDropdown>
          <BtnDropdown
            buttonContent={
              <>
                <FaCircleUser className="navbar-icon" />
                <TbTriangleInvertedFilled className="navbar-arrow" />
              </>
            }
          >
            <DropdownItem>
              <Link to='/projetos'>
                Editar perfil
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to='/projetos/teste/usuarios'>
                Alterar senha
              </Link>
            </DropdownItem>
            <DropdownItem>
              <button>
                Sair
              </button>
            </DropdownItem>
          </BtnDropdown>
        </RightGroup>
      </NavbarContainer>
    </NavbarBlock>
  );
}
