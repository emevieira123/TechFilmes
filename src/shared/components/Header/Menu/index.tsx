import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoPlayer from '../../../../assets/LogoVideoPlayer.svg';
import { Menus } from "./Menus";

export function Menu() {
  return (
    <MenuContainer>
      <h3><img src={LogoPlayer} />Tech Filmes HD</h3>
      <MenuContainerButtons>
        {Menus.map((menu, i) => {
          return (
            <ButtonsMenu to={menu.src} key={i}>{menu.title}</ButtonsMenu>
          )
        })}
      </MenuContainerButtons>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  height: 4rem;
  /* border-bottom: 1px solid ${props => props.theme.gray800}; */
  padding: 0 4rem;
  margin-bottom: 5px;

  display: flex;
  align-items: center;

  h3 {
    color: ${props => props.theme.yellowDark};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {

    }
  }
`;

const MenuContainerButtons = styled.div`
  height: 4rem;
  padding: 0 4rem;
  margin-bottom: 2px;

  display: flex;
  align-items: center;

`;

const ButtonsMenu = styled(NavLink)`
  height: 100%;
  text-decoration: none;
  color: ${props => props.theme.gray400};
  padding: 0 2rem;

  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.white};
  }

  &.active {
    border-bottom: 1px solid ${props => props.theme.yellowDark};
    color: ${props => props.theme.white};
  }
`;
