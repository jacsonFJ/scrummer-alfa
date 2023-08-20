import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Colors from "../../Colors";

export const PaginatorLine = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  margin: 40px 0px;
`;

export const ButtonTextPaginator = styled(Link)`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${Colors.neutral500};
  font-size: 12px;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ButtonNumberPaginator = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: ${props => props.checked ? Colors.neutral500 : '#fff'};
  color: ${props => props.checked ? '#fff' : Colors.secondary900 };
  text-decoration: none;
  font-size: 12px;
`;