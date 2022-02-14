import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="logo-Staggerer.png" alt="Staggerer" id="logo"></img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/peliculas" activeStyle>
                        Películas
                    </NavLink>
                    <NavLink to="/series" activeStyle>
                        Series
                    </NavLink>
                    <NavLink to="/libros" activeStyle>
                        Libros
                    </NavLink>
                    <NavLink to="/comics" activeStyle>
                        Comics
                    </NavLink>
                    <NavLink to="/musica" activeStyle>
                        Albumes Musicales
                    </NavLink>
                    <NavLink to="/sigin" activeStyle>
                        Crear Cuenta
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Ingresar</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}; 

export default NavBar