import styled from 'styled-components';
// import { FaMagento } from 'react-icons/fa';
//  import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.div`
  background: whitesmoke;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Combine = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  border: 1px;
  background: #50cb78;
  height: 80px;
  width: 90px;
  padding-left: 3px;
  padding-right: 3px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavIcon = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.div`
  color: #000;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 14px;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2px;
    width: 100%;
    display: table;
    font-weight: 5px;

    &:hover {
      color: #4b59f4;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItem = styled.div``;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 2px splid red;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-left: 50px;
`;

export const AvatarText = styled.h4`
  font-size: 14px;
  color: #000;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 15px;
  font-weight: 16px;
`;

export const P1 = styled.p`
  font-size: 10px;
  padding-left: 5px;
`;

export const Icon = styled.div`
padding:
`



