import { Row } from "antd";
import styled from "styled-components";

export const ButtonAssistirContainer = styled(Row)`
width: 100%;
height: 15rem;
justify-content: center;
align-items: center;

button {
  height: 3.5rem;
  padding: 0 5rem;
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  border-radius: 10rem;
  background: ${props => props.theme.gray800};
  color: ${props => props.theme.yellowDark};
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    color: ${props => props.theme.gray800};
    background: ${props => props.theme.yellowDark};
  }
}
`;

export const ContainerPlayer = styled(Row)`
  width: 100%;
  flex-direction: column;
  background: rgb(160,160,160, 0.02);
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 1rem;

  span {
    text-align: right;
    margin-bottom: 0.5rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.yellowDark}
    }
  }

  iframe {
    border-radius: 1rem;
  }
`;
