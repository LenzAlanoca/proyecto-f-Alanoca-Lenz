import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #000; ;
  box-shadow:0px 9px 16px 0px rgba(0,0,0,0.5) ;

`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

`;

export const LogoContainer = styled.div`

  margin-left: 0.3rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: Afacad;
  color: #fff;
  margin-right: -25rem;
  padding-bottom:0px;
  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
        
      font-size: 1.5rem;
      font-weight: 100;
      color: #FFF933;
    }
  }

  
  @media screen and (max-width: 960px) {
    width: 100%;
  

  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  
  justify-content: space-between;
  list-style: none;


  @media screen and (max-width: 960px) {
    background-color: #000;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: #000;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: calc(100vh - 70px); // Altura ajustada para tomar en cuenta la barra superior
    justify-content: flex-start; // Alinea los elementos al inicio
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    overflow-y: auto; // Permite el desplazamiento vertical
    overflow-x: hidden; // Oculta el desplazamiento horizonta
  }
`;
/*proveeee*/
export const SubMenuContainer = styled.div`
  display: none;
  background-color: #f9f9f9; // Un fondo ligeramente diferente
  border-left: 3px solid #FFF933; // Borde para destacar
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); // Sombra para profundidad

  @media screen and (max-width: 960px) {
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    
    // Otros estilos para móvil...
  }

  @media screen and (min-width: 961px) {
    
    display: flex;
    flex-direction: column;
    // Otros estilos para escritorio...
  }
`;

export const SubMenuItem = styled(Link)`
  padding: 15px 0;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  outline: solid 2px #000;
  border-bottom: solid 1px #000;
  
  margin-bottom: 2px;
  margin-left: 2px;

  &:hover {
    color: #000;
    background-color: #f2f2f2;
  }
  @media screen and (max-width: 960px) {
    margin-left: -60px;
    outline: solid 1px #000;
    padding: 2px;

  }

`;


/**/ 
export const MenuItem = styled.li`
  height: 100%;


  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #FFF933;
  font-family: Afacad;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  
  margin-right: 0rem;
  

  &:hover {
    color: #000;
    background-color: #fff;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #000;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
   
      fill: #FFF933;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    
    align-items: center;
    cursor: pointer;

    svg {
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
`;