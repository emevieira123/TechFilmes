import { Row } from "antd";
import styled from "styled-components";

export const Pagination = styled(Row)`
margin-top: 2rem;
align-items: center;
justify-content: center;
gap: 2rem;

button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  background: ${props => props.theme.yellowDark};
  color: ${props => props.theme.gray300};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.yellow};
  }
  &:disabled {
    background: transparent;
    border: 1px solid ${props => props.theme.yellowDark};
    color: ${props => props.theme.gray400};
  }
}
`;
