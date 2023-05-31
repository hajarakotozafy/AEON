import React, { useState } from 'react';
import { NavbarItems, NavbarLogo, MenuIcon } from "./Navbar.Style";
import { MenuItemsList } from "./MenuItems";
import Logo from "../../assets/images/Logo_Aeon.svg";
import Humberger from '../Humberger';

const Navbar: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <NavbarItems>
                <NavbarLogo  to="/">
                    <img src={Logo} alt=""/>
                    <div>
                        <p><span>Aeon</span><br/>Marketing design & developpement</p>
                    </div>
                </NavbarLogo>
                <MenuIcon onClick={()=>setClicked(!clicked)}>
                    <Humberger />
                </MenuIcon>
                <ul className={clicked?'nav-menu active': 'nav-menu'}>
                    {MenuItemsList.map((item, index) => {
                        return(
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul> 
            </NavbarItems>
        </>
    )
}

export default Navbar;  