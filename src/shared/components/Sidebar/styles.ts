import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to top, #38003f, #210746, #0c0644);
  padding: 1.25rem;
  padding-top: 2rem;
  position: relative;
  transition-duration: 0.3s;

  i {
    position: absolute;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    font-size: 1.25rem;
    right: -0.75rem;
    top: 4.5rem;
    color: #121214;
    background: #f4f4f6;
    border: 2px solid #121214;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    padding-top: 1.5rem;
  }

  li {
    list-style-type: none;
    margin-top: 0.5rem;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #c0c0c0;
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover {
    color: #121214;
    background: #e8e8e8;
    border-radius: 0.5rem;
  }

  &.active {
    color: #121214;
    background: #e8e8e8;
    border-radius: 0.5rem;
  }

  span {
    font-size: 1.25rem;
    transform-origin: left;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  h1 {
    color: #f4f4f6;
    font-weight: 500;
    font-size: 1.5rem;
    transition-duration: 1s;
  }
`;

export const FooterContainer = styled.div`
  color: #c0c0c0;
  position: absolute;
  bottom: 0;
  left: 1;
  margin-bottom: 15px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  :hover {
    background: #e8e8e8;
    color: #121214;
    border-radius: 0.5rem;
  }

  span {
    font-size: 1.25rem;
    transform-origin: left;
  }
`;

export const PageContainer = styled.div`
  padding: 2rem;
  height: 100vh;
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
`;
