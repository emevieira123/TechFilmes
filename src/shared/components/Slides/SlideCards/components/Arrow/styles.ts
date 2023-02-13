import styled from "styled-components";

export const ArrowStyle = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  cursor: pointer;

  &.arrow--left {
    left: 5px;
  }

  &.arrow--right {
    left: auto;
    right: 5px;
  }
`;
