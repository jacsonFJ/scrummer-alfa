import { styled } from "styled-components";
import Colors from "../Colors";

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
