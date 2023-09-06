import { styled } from "styled-components";

import Colors from "../../../Colors";

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  a {
    color: ${Colors.secondary900};
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    text-decoration: none;
  }
`;

export const NoSprint = styled.p`
  color: ${Colors.secondary700};
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 200px;
`;
