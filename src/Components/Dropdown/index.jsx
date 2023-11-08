import { useEffect, useState } from "react";

import { DropdownContainer, DropdownList } from "./styles";

export default function Dropdown(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    return closeDropdown;
  }, []);

  const onClickButton = () => {
    if (!active) {
      if (props.onOpen)
        props.onOpen();
      setActive(true);
      setTimeout(() =>document.addEventListener('click', onClickOut), 100);
    } else {
      closeDropdown();
    }
  };

  const onClickOut = () => {
    setTimeout(() => closeDropdown(), 100);
  };

  const closeDropdown = () => {
    setActive(false);
    document.removeEventListener('click', onClickOut);
  };

  return (
    <DropdownContainer>
      <button className={props.className} onClick={onClickButton}>
        {props.buttonContent}
      </button>
      <DropdownList active={active}>
        {props.children}
      </DropdownList>
    </DropdownContainer>
  );
}
