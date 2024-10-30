import React from 'react'
import HeaderLogo from './HeaderLogo';
import Nav from '../NavLinks/Nav';
import Theme from '../Theme/Theme';

const Header = () => {
    return (
        <header className='w-full'>
            <div className="header-items w-[95%] lg:w-[85%] md:w-4/5 mx-auto flex justify-between items-center py-4">
                <HeaderLogo />
                <Nav />
                <Theme />
            </div>
        </header>
    )
}

export default Header;