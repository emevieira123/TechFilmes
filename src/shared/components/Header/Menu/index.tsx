import { Row } from "antd";
import LogoPlayer from '../../../../assets/LogoVideoPlayer.svg';
import { URLS } from "../../../../infra/URLS";
import { Menus } from "./Menus";

import { BsSearch } from 'react-icons/bs';
import { ButtonPesquisar, ButtonsMenu, MenuContainer, MenuContainerButtons } from "./styles/style";

export function Menu() {
  return (
    <MenuContainer>
      <Row>
        <h3><img src={LogoPlayer} />Tech Filmes HD</h3>
        <MenuContainerButtons>
          {Menus.map((menu, i) => {
            return (
              <ButtonsMenu to={menu.src} key={i}>{menu.title}</ButtonsMenu>
            )
          })}
        </MenuContainerButtons>
      </Row>
      <ButtonPesquisar to={URLS.PESQUISAR}><BsSearch size={25} /></ButtonPesquisar>
    </MenuContainer>
  );
}
