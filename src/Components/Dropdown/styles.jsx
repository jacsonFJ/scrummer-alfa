import styled from "styled-components";

import Colors from '../../Colors';

export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
`;

export const DropdownList = styled.ul`
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  padding: 4px 0px;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: #FFF;
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 17px);

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 15px solid ${Colors.secondary200};
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -15px;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid white;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -13px;
  }
`;

export const DropdownItem = styled.li`
  display: flex;
  white-space: nowrap;
  width: 100%;
  padding: 4px 12px;

  a, button {
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    padding: 0px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  &:hover {
    background-color: ${Colors.secondary50};
  }
`;
