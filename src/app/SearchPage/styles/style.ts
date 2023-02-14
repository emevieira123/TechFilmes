import { Row } from "antd";
import styled from "styled-components";

export const SearchContainer = styled(Row)`
  padding: 1rem 3rem;
`;

export const InputContainer = styled(Row)`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    width: 96.5%;
    height: 3rem;
    border: 0;
    font-size: 1.25rem;
    text-align: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${props => props.theme.gray800};
    color: ${props => props.theme.gray300};
    &:focus {
      outline: none;
    }
  }

  button {
    width: 3.5%;
    height: 3rem;
    border: 0;
    background: ${props => props.theme.gray800};
    color: ${props => props.theme.gray300};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
`;

export const NotFound = styled(Row)`
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.5rem;
    color: ${props => props.theme.gray400};
  }
`;
