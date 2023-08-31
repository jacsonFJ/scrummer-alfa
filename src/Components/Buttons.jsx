import { styled } from "styled-components";
import Colors from "../Colors";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const ButtonText = styled.button`
  display: flex;
  width: ${props => props.width || '274px'};
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-size: 16px;
`;

export const ButtonSuccess = styled(ButtonText)`
  border: 1px solid ${Colors.success700};
  background: ${Colors.success500};
  color: #FFF;
`;

export const ButtonDanger = styled(ButtonText)`
  border: 1px solid ${Colors.danger700};
  background: ${Colors.danger500};
  color: #FFF;
`;

export const ButtonWhite = styled(ButtonText)`
  border: 1px solid ${Colors.secondary200};
  background: #fff;
  color: ${Colors.secondary900};
`;

export const ButtonIcon = styled.button`
  display: flex;
  padding: 11px;
  border-radius: 8px;
`;

const ButtonTrashTemplate = styled(ButtonIcon)`
  border: 1px solid ${Colors.danger200};
  background: ${Colors.danger50};
  color: ${Colors.danger500};
`;

const ButtonPlusTemplate = styled(ButtonIcon)`
  border: 1px solid ${Colors.neutral200};
  background: ${Colors.neutral50};
  color: ${Colors.neutral500};
`;

export function ButtonTrash() {
  return (
    <ButtonTrashTemplate>
      <FiTrash2 size={16} />
    </ButtonTrashTemplate>
  );
}

export function ButtonPlus() {
  return (
    <ButtonPlusTemplate>
      <FiPlus size={16} />
    </ButtonPlusTemplate>
  );
}
