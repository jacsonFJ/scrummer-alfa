import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Colors from "../../Colors";

export const CardContainer = styled.div`
  display: flex;
  width: 731px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  p {
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 400;
    margin: 0px;
  }
`;

export const CardTitle = styled(Link)`
  color: ${Colors.neutral500};
  font-size: 20px;
  font-weight: 700;
  margin: 0px;
  text-decoration: none;
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 10px;

  .users-list > img:not(:first-child) {
    margin-left: -17px;
  }

  .sprint-items-count {
    display: flex;
    gap: 3px;
    align-items: center;
    color: ${Colors.secondary900};
    font-size: 16px;
    font-weight: 400;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
