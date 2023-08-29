import { styled } from "styled-components";
import Colors from '../../Colors';

export const ItemContainer = styled.div`
  display: flex;
  width: 890px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.secondary200};
`;

export const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
  gap: 8px;

  h3 {
    color: ${Colors.secondary900};
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
  }

  .bottom-line {
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 400;
  }
`;

export const BacklogInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .users-list > img:not(:first-child) {
    margin-left: -8px;
  }

  .item-notes {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${Colors.secondary900};
    font-size: 16px;
    font-weight: 600;
  }
`;
