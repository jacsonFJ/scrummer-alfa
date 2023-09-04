import { styled } from "styled-components";
import Colors from "../../Colors";

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background-color: white;
  width: -webkit-fill-available;
  color: ${Colors.secondary700};
  font-size: 16px;

  &:focus-visible {
    outline: 1px solid ${Colors.secondary700};
  }
`;

export default function InputText() {
  return <Input type="text" />;
}
