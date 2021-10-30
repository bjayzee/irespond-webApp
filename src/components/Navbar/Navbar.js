import React, { useState } from 'react';
import { FaBars, FaTimes, } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import AvatarIcon from '@material-ui/core/Avatar';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Avatar,
  AvatarText,
  AvatarContainer,
  P1,
  Icon,
  Combine
} from './Navbar.element';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>

            <Combine>
            <NavLogo to="/">iRESPOND</NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Dashboard</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/appointment">Appointments</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/patient">Patient</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/profile">Profile</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/settings">Settings</NavLinks>
              </NavItem>
            </NavMenu>
            </Combine>

            <AvatarContainer>
              <Icon><i class="fal fa-bell-exclamation"></i></Icon>
              <hr />
              <Avatar>
                <AvatarIcon alt="" src="/images/bj.jpg" />
              </Avatar>
              <AvatarText>
                <h5>ADAMS BOLAJI</h5>
                <P1>PSYCHOLOGIST</P1>
              </AvatarText>
            </AvatarContainer>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
