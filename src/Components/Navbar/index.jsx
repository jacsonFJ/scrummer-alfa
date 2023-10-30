import { FiBell } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { BtnDropdown, NavbarBlock, NavbarContainer, RightGroup } from "./styles";
import icon from '../../assets/logo-scrummer.png';
import { LogoImage } from "./styles";
import { DropdownItem } from '../Dropdown/styles';
import { createUser, removeUser } from "../../redux/user/slice";
import { logoutMe, showMe } from "../../helpers/repositories/userRepository";
import ChangePassword from "../Modals/ChangePassword";
import UpdateMe from "../Modals/UpdateMe";

export default function Navbar() {

  const { user } = useSelector(rootReducer => rootReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const onLogout = () => {
    logoutMe();
    dispatch(removeUser());
    navigate('/login');
  };

  const onUpdateMe = () => {
    setIsUpdateModalOpen(false);
    showMe()
      .then(response => dispatch(createUser(response.data.data)));
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
                {user?.picture_url ? (
                  <img src={user.picture_url} className="navbar-icon" />
                ) : (
                  <FaCircleUser className="navbar-icon" />
                )}
                <TbTriangleInvertedFilled className="navbar-arrow" />
              </>
            }
          >
            <DropdownItem>
              <button onClick={() => setIsUpdateModalOpen(true)}>
                Editar perfil
              </button>
            </DropdownItem>
            <DropdownItem>
              <button onClick={() => setIsPasswordModalOpen(true)}>
                Alterar senha
              </button>
            </DropdownItem>
            <DropdownItem>
              <button onClick={onLogout}>
                Sair
              </button>
            </DropdownItem>
          </BtnDropdown>
        </RightGroup>
      </NavbarContainer>
      <ChangePassword
        isOpen={isPasswordModalOpen}
        closeModal={() => setIsPasswordModalOpen(false)}
      />
      <UpdateMe
        isOpen={isUpdateModalOpen}
        closeModal={onUpdateMe}
      />
    </NavbarBlock>
  );
}
