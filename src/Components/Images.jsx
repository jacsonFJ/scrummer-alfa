import { styled } from "styled-components";
import Colors from "../Colors";

export const ImgCircle = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size};
  border: 1px solid ${Colors.secondary200};
  background: ${Colors.secondary200};
  object-fit: cover;
`;