import styled from "styled-components";

export const MovieDescriptionContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const DescriptionStyle = styled.div`
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props => props.theme});
  background-size: cover;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 2rem;
    height: 80%;
  }
`

export const DetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 1rem;
  }

  strong {
    margin-top: 1rem;
  }

  p {
    margin-top: 5px;
    width: 40rem;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.875rem;

  span {
    margin-top: 5px;
  }

  button {
    margin-top: 5px;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.yellowDark};
    &:hover {
      color: ${props => props.theme.yellow};
    }
  }
`;
