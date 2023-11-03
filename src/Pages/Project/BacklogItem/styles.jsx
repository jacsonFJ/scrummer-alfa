import { styled } from "styled-components";
import Colors from "../../../Colors";

export const BacklogItemContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const Row40 = styled.div`
  display: flex;
  align-items:flex-start;
  align-content:flex-start;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Row5 = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  color: ${Colors.secondary900};
  font-size: 12px;
  font-weight: 400;
`;

export const ItemTitle = styled.h2`
  display: flex;
  gap: 20px;
  margin: 0px;
  color: ${Colors.secondary900};
  font-size: 30px;
  font-weight: 700;
  span {
    font-weight: 400;
  }

  button {
    display: flex;
    color: ${Colors.secondary900};
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${Colors.secondary200};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  width: 890px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const LeftEvents = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${Colors.secondary300};
    position: absolute;
    left: 37px;
    z-index: -1;
  }
`;

export const CommentArea = styled.form`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-content: flex-start;
`;

export const ItemDescription = styled.p`
  display: flex;
  width: 100%;
  padding: 25px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  text-align: justify;
  font-size: 12px;
  font-weight: 400;
  tab-size: 4;
  color: ${Colors.secondary900};
  margin: 0px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-top: 1px solid ${Colors.secondary200};
`;

export const RightRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px;
  gap: 12px;
  border-bottom: 1px solid ${Colors.secondary200};
`;

export const RightTitle = styled.h3`
  color: ${Colors.secondary900};
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
  display: flex;
`;

export const Participant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .participant-profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .participant-name {
    font-size: 12px;
    color: ${Colors.secondary900};
    font-weight: 700;
  }
`;

export const ParticipantRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  margin-top: 8px;
`;
