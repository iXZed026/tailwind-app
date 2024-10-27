import React from 'react'
import HeaderLogo from './HeaderLogo';
import Nav from '../NavLinks/Nav';
import Theme from '../Theme/Theme';

const Header = () => {
    return (
        <header className='w-full'>
            <div className="header-items">
                <HeaderLogo />
                <Nav />
                <Theme />
            </div>
        </header>
    )
}

export default Header;