import { FiBell } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import { NavbarBlock, NavbarContainer, RightGroup } from "./styles";
import icon from '../../assets/logo-scrummer.png';
import { LogoImage } from "./styles";

export default function Navbar() {
  return (
    <NavbarBlock>
      <NavbarContainer>
        <LogoImage to='/projetos'>
          <img src={icon} title="Scrummer" />
        </LogoImage>
        <RightGroup>
          <div>
            <FiBell className="navbar-icon" />
            <TbTriangleInvertedFilled className="navbar-arrow" />
          </div>
          <div>
            <FaCircleUser className="navbar-icon" />
            <TbTriangleInvertedFilled className="navbar-arrow" />
          </div>
        </RightGroup>
      </NavbarContainer>
    </NavbarBlock>
  );
}
