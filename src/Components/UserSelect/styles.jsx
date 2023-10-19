import styled from "styled-components";

import Colors from '../../Colors';

export const DropdownList = styled.ul`
  display: 'flex';
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  margin: 0px;
  padding: 4px;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: #FFF;
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 4px);
`;

export const DropdownItem = styled.li`
  display: flex;
  width: 100%;

  button {
    padding: 4px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  &:hover {
    background-color: ${Colors.secondary50};
  }
`;
