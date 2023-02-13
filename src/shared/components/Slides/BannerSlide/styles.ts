import styled from "styled-components";

export const ImgContainer = styled.div`
height: 30rem;
background: ${props => props.theme.gray400};

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export const ButtonSlideCircle = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;

  position: relative;
  margin-top: -2rem;
`;

export const ButtonSlide = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: ${props => props.theme.yellowDark};
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:focus {
  outline: none;
  }

  &.active {
  background: #000;
}
`;
