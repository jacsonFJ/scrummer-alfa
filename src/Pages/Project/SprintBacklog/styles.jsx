import { styled } from "styled-components";

import Colors from "../../../Colors";

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  h2 {
    color: ${Colors.secondary900};
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }
`;
