import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Menus } from "./Menus";
import { Container, FooterContainer, LogoContainer, MenuLink, PageContainer, SidebarContainer } from "./styles";

import Logo from '../../../assets/LogoVideoPlayer.svg';
import { RiLogoutCircleLine } from "react-icons/ri";

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(true);
  const footer = { title: 'Logout', src: "", icon: <RiLogoutCircleLine size={25} />};

  return (
    <Container>
    <SidebarContainer style={{ width: `${open ? '18rem' : '5rem'}` }}>
      <i
        onClick={() => setOpen(!open)}
        style={{ rotate: `${open ? '180deg' : ''}` }}
      >
        <IoIosArrowForward />
      </i>
      <LogoContainer>
        <img src={Logo} alt="" />
        {open && <h1>Tech Filmes</h1>}
      </LogoContainer>
      <ul>
        {Menus.map((menu, index) => (
          <li key={index}>
            <MenuLink to={menu.src}>
              {menu.icon}
              {open && <span>{menu.title}</span>}
            </MenuLink>
          </li>
        ))}
      </ul>

      <FooterContainer style={{width: `${!open ? '' : '85%'}`}}>
          {footer.icon}
          {open && <span>{footer.title}</span>}
      </FooterContainer>

    </SidebarContainer>

    <PageContainer>
      {children}
    </PageContainer>
  </Container>
  );
}
