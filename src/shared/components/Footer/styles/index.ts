import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0.8), transparent);

  position: relative;
  bottom: 0;
  left: 0;
`;

export const ContainerGridFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) ;
`;

export const GridInfo = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.white};

    display: flex;
    align-items: center;
    gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.gray400};
  }
  }
`;

export const LinksFooter = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.white};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.gray400};
  }

  &.active {
    color: ${props => props.theme.yellowDark}
  }
`;

export const Copyright = styled.div`
  padding: 0.5rem 0;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`;
