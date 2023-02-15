import Logo from '../../../../assets/LogoVideoPlayer.svg';
import { ContainerGridFooter, Copyright, FooterContainer, GridInfo, LinksFooter } from "../styles";
import { infoFooter, socialFooter } from "../utils/DataFooter";


export function Footer() {
  return (
    <FooterContainer>
      <ContainerGridFooter>

        <GridInfo>
          <strong>Informações</strong>
          {infoFooter.map(item => <LinksFooter key={item.id} to={item.url}>{item.title}</LinksFooter>)}
        </GridInfo>
        <GridInfo>
          <strong>Mídias Sociais</strong>
          {socialFooter.map(item =>
            <a
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <i>{item.icon}</i>
              {item.title}
            </a>)}
        </GridInfo>
        <GridInfo>
          <strong>Contato</strong>
          <span>suport@techfilmes.com.br</span>
          <span>(65) 3333-3333</span>
          <span>(65) 9 9999-9999</span>
        </GridInfo>
        <GridInfo>
          <strong><img src={Logo} /> Tech Filmes HD</strong>
          <span>
            Tech Filmes HD é uma plataforma online para baixar filmes e séries gratuitamente.
            Atualizamos nossos conteúdos constantemente, oferecendo aos nossos usuários as últimas atualizações disponíveis.
          </span>
        </GridInfo>
      </ContainerGridFooter>
      <Copyright>
        <span>© Copyright Todos os direitos reservados a Tech Filmes 2023</span>
      </Copyright>
    </FooterContainer>
  );
}
