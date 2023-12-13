import miImagen from '../../assets/logo3.png';
import { Link } from "react-router-dom";
import { SubMenuContainer } from './Narbar.elements';
import { SubMenuItem } from './Narbar.elements';
import React, { useState, useEffect } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { TbPlayFootball } from "react-icons/tb";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { GiSecretBook } from "react-icons/gi";
import { SiEsphome } from "react-icons/si";
import { GrScorecard } from "react-icons/gr";



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  /*proves*/

  const [activeSubMenu, setActiveSubMenu] = useState(null); // Estado para submenús en escritorio

  // Función para activar el submenú en escritorio
  const handleMouseEnter = (menuName) => {
    setActiveSubMenu(menuName);
  };

  // Función para desactivar el submenú en escritorio
  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  // Función para cerrar el menú móvil


  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const [activeSubMenuMobile, setActiveSubMenuMobile] = useState(null); // Estado para submenús en móvil


  // Función para alternar el submenú en móvil
  const toggleSubMenuMobile = (menuName) => {
    setActiveSubMenuMobile(activeSubMenuMobile === menuName ? null : menuName);
  };
  /**/
  return (
    <Menu open={showMobileMenu}>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              <Link className='loguito' to="/" ><img src={miImagen} width="100%"></img></Link>
              <p>ADI -</p>
              <p>g(x)</p>
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
              <MenuItem onMouseEnter={() => handleMouseEnter('Inicio')}
                onMouseLeave={handleMouseLeave}>
                <MenuItemLink to="/" onClick={closeMobileMenu}>

                  <div>
                    <SiEsphome />

                    INICIO
                  </div>

                </MenuItemLink>

              </MenuItem>
              <MenuItem
                onMouseEnter={() => handleMouseEnter('Acercade')}
                onMouseLeave={handleMouseLeave}
              >
                <MenuItemLink to="/Acercade" onClick={closeMobileMenu}>

                  <GiSecretBook />

                  ACERCA DE
                </MenuItemLink>
                {(activeSubMenu === 'Acercade' || showMobileMenu) && (
                  <SubMenuContainer>
                    <SubMenuItem onClick={closeMobileMenu}>
                      <Link to="/Historia" className='subenl'>CONTACTANOS</Link>
                    </SubMenuItem>

                  </SubMenuContainer>
                )}
              </MenuItem>


              <MenuItem
                onMouseEnter={() => handleMouseEnter('Deportes')}
                onMouseLeave={handleMouseLeave}
              >
                <MenuItemLink to="/Deportes" onClick={closeMobileMenu}>

                  <TbPlayFootball />

                  DEPORTES
                </MenuItemLink>
                {(activeSubMenu === 'Deportes' || showMobileMenu) && (
                  <SubMenuContainer>
                    <SubMenuItem onClick={closeMobileMenu}>
                      <Link to="/Atletismo" className='subenl'>ATLETISMO</Link>
                    </SubMenuItem>
                    <SubMenuItem onClick={closeMobileMenu}>
                      <Link to="/Alpinismo" className='subenl'>ALPINISMO</Link>
                    </SubMenuItem>

                  </SubMenuContainer>
                )}
              </MenuItem>

              <MenuItem
                onMouseEnter={() => handleMouseEnter('Creditos')}
                onMouseLeave={handleMouseLeave}
              >
                <MenuItemLink to="/Creditos" onClick={closeMobileMenu}>
                  <GrScorecard />

                  CREDITOS
                </MenuItemLink>
                {(activeSubMenu === 'Creditos' || showMobileMenu) && (
                  <SubMenuContainer>
                    

                  </SubMenuContainer>
                )}
              </MenuItem>


              <MenuItem
                onMouseEnter={() => handleMouseEnter('Articulos')}
                onMouseLeave={handleMouseLeave}
              >
                <MenuItemLink to="/Articulos" onClick={closeMobileMenu}>
                  <MdSportsTennis />
                  ARTICULOS
                </MenuItemLink>
                {(activeSubMenu === 'Articulos' || showMobileMenu) && (
                  <SubMenuContainer>
                    <SubMenuItem onClick={closeMobileMenu}>
                      <Link to="/Tenis" className='subenl'>TENIS</Link>
                    </SubMenuItem>
                    <SubMenuItem onClick={closeMobileMenu}>
                      <Link to="/Camisetas" className='subenl'>CAMISETAS</Link>
                    </SubMenuItem>

                  </SubMenuContainer>
                )}
              </MenuItem>

            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </Menu>
  );

};

export default Navbar;