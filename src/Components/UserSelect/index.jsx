import { useEffect, useRef, useState } from "react";

import { DropdownItem, DropdownList } from "./styles";
import { ButtonPlus, ButtonSuccess } from "../Buttons";
import { DropdownContainer } from "../Dropdown/styles";
import http from "../../helpers/http";
import { ImgCircle } from "../Images";

export default function UserSelect({buttonType, endpoint, onSelectUser}) {

  const [active, setActive] = useState(false);
  const [users, setUsers] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    return closeDropdown;
  }, []);

  const onClickButton = () => {
    if (!active) {
      http.get(endpoint)
        .then(response => {
          setUsers(response.data.data);
          setActive(true);
          document.addEventListener('click', onClickOut);
        })
        .catch(() => console.error('Erro ao listar usuário para o select-dropdown'));
    } else {
      closeDropdown();
    }
  };

  const onClickOut = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target))
      closeDropdown();
  };

  const closeDropdown = () => {
    setActive(false);
    document.removeEventListener('click', onClickOut);
  };

  const onUserClick = (userId) => {
    closeDropdown();
    onSelectUser(userId);
  };

  return (
    <DropdownContainer ref={containerRef}>
      {buttonType === 'plus' ? (
        <ButtonPlus onClick={onClickButton} />
      ) : (
        <ButtonSuccess onClick={onClickButton}>
          Adicionar Participante
        </ButtonSuccess>
      )}
      {active && users.length > 0 && (
        <DropdownList>
          {users.map(user => (
            <DropdownItem key={user.id}>
              <button onClick={() => onUserClick(user.id)}>
                <ImgCircle size='34px' src={user.picture_url} />
                <span>
                  {user.name}
                </span>
              </button>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
