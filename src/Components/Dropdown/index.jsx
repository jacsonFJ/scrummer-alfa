import { useEffect, useState, useRef } from "react";

import { DropdownContainer, DropdownList } from "./styles";

export default function Dropdown(props) {
  const [active, setActive] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    return closeDropdown;
  }, []);

  const onClickButton = () => {
    if (!active) {
      setActive(true);
      document.addEventListener('mousedown', onClickOut);
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
    document.removeEventListener('mousedown', onClickOut);
  };

  return (
    <DropdownContainer ref={containerRef}>
      <button className={props.className} onClick={onClickButton}>
        {props.buttonContent}
      </button>
      <DropdownList active={active}>
        {props.children}
      </DropdownList>
    </DropdownContainer>
  );
}
