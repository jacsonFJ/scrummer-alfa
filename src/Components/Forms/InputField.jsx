import { styled } from "styled-components";
import Colors from "../../Colors";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
`;

const Title = styled.label`
  color: ${Colors.secondary700};
  font-size: 16px;
`;

export default function InputField(props) {
  return (
    <Field>
      <Title>{props.title}</Title>
      {props.children}
    </Field>
  );
}
