import styled from "styled-components";
import Colors from "../Colors";

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgb(138 204 245 / 40%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '841px',
    padding: '20px 32px',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
    overflow: 'unset',
  },
};

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${Colors.secondary900};
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0px;
    cursor: pointer;
    color: ${Colors.secondary900};
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  .form-row {
    display: flex;
    gap: 16px;
  }
`;

export const ModalSeparator = styled.hr`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 0px;
  background-color: ${Colors.secondary200};
  border: none;
`;
