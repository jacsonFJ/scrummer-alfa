import { styled } from "styled-components";

import Colors from "../../Colors";
import Chevron from '../../assets/chevron-down.png';

export const FilterContainer = styled.form`
  display: flex;
  width: 890px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid ${Colors.secondary200};
  border-bottom: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary50};
`;

export const FilterInput = styled.div`
  width: 671px;
  height: 30px;
  flex-shrink: 0;
  position: relative;

  input {
    width: 100%;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${Colors.secondary300};
    background: #FFF;
    padding: 8px 20px;
    color: ${Colors.secondary700};
    font-size: 12px;
    &:focus-visible {
      outline: 1px solid ${Colors.secondary700};
    }
  }

  button {
    background-color: transparent;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 48px;
    height: 30px;
    border: none;
    border-left: 1px solid ${Colors.secondary300};
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.secondary900};
  }
`;

export const FilterOrder = styled.div`
  border: 1px solid ${Colors.secondary300};
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: 30px;

  select {
    width: 119px;
    height: 28px;
    color: ${Colors.secondary900};
    font-size: 12px;
    appearance: none;
    background-image: url("${Chevron}");
    background-repeat: no-repeat;
    background-position-x: calc(100% - 8px);
    background-position-y: center;
    border: none;
    border-radius: 8px;
    padding: 0px 12px;
    &:focus-visible {
      outline: none;
    }
  }

  label {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    border-left: 1px solid ${Colors.secondary300};
    width: 40px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.secondary900};
    background-color: white;
    padding: 0px;
  }

  input {
    display: none;
  }
`;
