import { Row } from "antd";
import styled from "styled-components";

export const Container = styled(Row)`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
`;

export const GripStyle = styled(Row)`
  /* width: 12.07rem; */
  height: 36vh;
  background-image: ${props => props.theme};
  background-size: cover;
  border-radius: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const InfoContainer = styled.div`
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0.8), transparent);

  span {
    font-size: 0.875rem;
    font-weight: bold;
  }

  p {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;
