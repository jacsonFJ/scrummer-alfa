import { styled } from "styled-components";

import Colors from "../../Colors";

export const EventContainer = styled.div`
  display: inline-flex;
  padding: 0px 20px;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: 1px solid ${Colors.secondary300};
    background: ${Colors.secondary50};
  }

  span {
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }
`;
