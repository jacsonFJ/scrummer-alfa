import { styled } from "styled-components";
import Colors from "../../Colors";
import Chevron from '../../assets/chevron-down.png';

const Input = styled.select`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background-color: white;
  width: 300px;
  color: ${Colors.secondary700};
  font-size: 16px;
  appearance: none;
  background-image: url("${Chevron}");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 8px);
  background-position-y: center;

  &:focus-visible {
    outline: 1px solid ${Colors.secondary700};
  }
`;

export default function InputSelect({children}) {
  return <Input>{children}</Input>;
}
