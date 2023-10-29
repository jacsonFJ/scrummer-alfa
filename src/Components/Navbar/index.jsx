import { FiBell } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { BtnDropdown, NavbarBlock, NavbarContainer, RightGroup } from "./styles";
import icon from '../../assets/logo-scrummer.png';
import { LogoImage } from "./styles";
import { DropdownItem } from '../Dropdown/styles';
import { createUser, removeUser } from "../../redux/user/slice";
import { logoutMe, showMe } from "../../helpers/repositories/userRepository";

export default function Navbar() {

  const { user } = useSelector(rootReducer => rootReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    logoutMe();
    dispatch(removeUser());
    navigate('/login');
  };
  
  useEffect(() => {
    if (!user) {
      showMe()
        .then(response => dispatch(createUser(response.data.data)))
        .catch(() => {
          dispatch(removeUser());
          navigate('/login');
        });
    }
  }, []);

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
              <button onClick={onLogout}>
                Sair
              </button>
            </DropdownItem>
          </BtnDropdown>
        </RightGroup>
      </NavbarContainer>
    </NavbarBlock>
  );
}
