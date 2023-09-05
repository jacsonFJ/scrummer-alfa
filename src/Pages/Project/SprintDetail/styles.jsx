import { styled } from "styled-components";
import Colors from "../../../Colors";

export const CardsRow = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 40px;
  justify-content: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardListTitle = styled.div`
  display: flex;
  width: 445px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${Colors.secondary200};
  border-bottom: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};

  .card-title {
    display: flex;
    align-items: center;
    gap: 8px;
    * {
      color: ${Colors.secondary900};
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 0px;
    }
  }
`;

export const CardListBottom = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  border-bottom: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};
  width: 445px;
`;
