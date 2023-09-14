import { Link } from "react-router-dom";

import { styled } from "styled-components";
import Colors from "../../Colors";
import Dropdown from "../Dropdown";

export const NavbarBlock = styled.div`
  width: 100%;
  background: ${Colors.primary500};
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
`;

export const LogoImage = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

export const BtnDropdown = styled(Dropdown)`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  border: none;
  color: white;

  .navbar-icon {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
  .navbar-arrow {
    width: 8px;
    height: 8px;
  }
`;
