import { styled } from "styled-components";
import Colors from "../../../Colors";

export const ProjectCardList = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  margin-top: 40px;
`;

export const ProjectCardMargin = styled.div`
  width: 100%;
  max-width: 978px;
  padding: 16px 22px;
  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.secondary200};
  }
`;
