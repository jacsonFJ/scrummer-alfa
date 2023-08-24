import { css, styled } from "styled-components";

import Colors from '../../Colors';
import { Link } from "react-router-dom";

export const HeaderBlock = styled.div`
  border-bottom: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};
  display: flex;
  justify-content: center;
  width: 100%;

  #header-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
  }
`;

export const IconBlock = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;

  h1 {
    color: ${Colors.secondary900};
    font-size: 35px;
    font-weight: 700;
    line-height: normal;
  }
`;

export const IconBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid ${Colors.secondary200};
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.secondary900};
`;

export const LinksList = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 30px;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 14px 0px;
  margin-top: 32px;
  color: ${Colors.secondary900};
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  position: relative;

  ${props => {
    if (props.checked) {
      return css`&::before {
        content: "";
        display: block;
        width: 110%;
        height: 2px;
        background-color: #FF7556;
        position: absolute;
        bottom: -1px;
      }`;
    }
  }}

  svg {
    width: 20px;
    height: 20px;
  }
`;
