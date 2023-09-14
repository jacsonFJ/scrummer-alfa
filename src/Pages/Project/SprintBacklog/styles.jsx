import { styled } from "styled-components";

import Colors from "../../../Colors";

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  a {
    color: ${Colors.secondary900};
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    text-decoration: none;
  }
`;

export const NoSprint = styled.p`
  color: ${Colors.secondary700};
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 200px;
`;

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
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
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
