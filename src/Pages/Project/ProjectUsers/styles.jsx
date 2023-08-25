import { styled } from "styled-components";
import Colors from "../../../Colors";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin: 20px 0px;
  width: 841px;
`;

export const UsersList = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const UserItem = styled.div`
  display: flex;
  width: 841px;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};
`;

export const Profile1 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  .profile-2 {
    display: flex;
    height: 55px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .user-name {
    color: ${Colors.neutral500};
    font-size: 16px;
    font-weight: 600;
  }

  .profile-3 {
    display: flex;
    align-items: flex-start;
    gap: 28px;
    span {
      color: ${Colors.secondary900};
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
