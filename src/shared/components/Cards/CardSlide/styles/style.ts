import styled from "styled-components";

export const ImgContainer = styled.div`
height: 36vh;
background: ${props => props.theme.gray400};
border-radius: 1.5rem;
cursor: pointer;

&:hover {
  opacity: 0.8;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0.8), transparent);

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;
