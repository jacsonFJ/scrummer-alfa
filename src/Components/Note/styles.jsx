import { styled } from "styled-components";
import Colors from "../../Colors";

export const NoteContainer = styled.div`
  display: flex;
  max-width: 890px;
  width: 100%;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
  background: white;

  .note-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .note-top-profile {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
      margin: 0px;
      color: ${Colors.secondary900};
      font-size: 12px;
      font-weight: 700;
      span {
        font-weight: 400;
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border-top: 1px solid ${Colors.secondary200};
    margin: 0px;
  }

  p {
    display: flex;
    padding: 0px 42px;
    align-items: flex-start;
    align-self: stretch;
    margin: 0px;
    text-align: justify;
    color: ${Colors.secondary900};
    font-size: 12px;
    font-weight: 400;
  }
`;
