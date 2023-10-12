import { css, styled } from "styled-components";
import Colors from "../../Colors";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;

  .input-error {
    color: ${Colors.danger400};
    font-size: 12px;
    font-weight: 500;
    display: none;
  }

  ${props => props.error && css`
    input {
      outline: 1px solid ${Colors.danger400};
    }
    .input-error {
      display: inline-flex;
    }
  `}
`;

const Title = styled.label`
  color: ${Colors.secondary700};
  font-size: 16px;
`;

export default function InputField(props) {
  return (
    <Field error={props.error}>
      <Title>{props.title}</Title>
      {props.children}
      <label className="input-error">{props.error}</label>
    </Field>
  );
}
