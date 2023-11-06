import { FiBell } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
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
import { listInvites } from "../../helpers/repositories/inviteRepository";
import ShowInvite from "../Modals/ShowInvite";
import Colors from "../../Colors";

export default function Navbar() {

  const { user } = useSelector(rootReducer => rootReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [invites, setInvites] = useState([]);
  const [modalInvite, setModalInvite] = useState(null);

  const onLogout = () => {
    logoutMe();
    dispatch(removeUser());
    localStorage.removeItem('access-token');
    navigate('/login');
  };

  const onUpdateMe = () => {
    setIsUpdateModalOpen(false);
    showMe()
      .then(response => dispatch(createUser(response.data.data)));
  };

  const openInvite = invite => {
    setModalInvite(invite);
    setIsInviteModalOpen(true);
  };

  const closeInvite = () => {
    setIsInviteModalOpen(false);
    listInvites(setInvites);
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
    
    listInvites(setInvites);
    const interval = setInterval(() => {
      listInvites(setInvites);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NavbarBlock>
      <NavbarContainer>
        <LogoImage to='/projetos'>
          <img src={icon} title="Scrummer" />
        </LogoImage>
        <RightGroup>
          <BtnDropdown
            onOpen={() => listInvites(setInvites)}
            buttonContent={
              <>
                <FiBell className="navbar-icon" />
                <TbTriangleInvertedFilled className="navbar-arrow" />
                {invites.length > 0 && (<div
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: Colors.warning500,
                    borderRadius: '8px',
                    position: 'absolute',
                    top: '0px',
                    right: '8px',
                  }}
                />)}
              </>
            }
          >
            {invites.length > 0 ? (
              <>
                {invites.map(invite => (
                  <DropdownItem key={invite.id}>
                    <button onClick={() => openInvite(invite)}>
                      Você foi convidado para um projeto
                    </button>
                  </DropdownItem>
                ))}
              </>
            ) : (
              <DropdownItem>Não há convites</DropdownItem>
            )}
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
      <ShowInvite
        isOpen={isInviteModalOpen}
        closeModal={closeInvite}
        invite={modalInvite}
      />
    </NavbarBlock>
  );
}
