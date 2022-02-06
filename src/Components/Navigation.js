import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Nav from '../StyledComponents/Nav'
import NavWrapper from '../StyledComponents/NavWrapper'
import menu from '../../public/icons/menu.png'
import close from '../../public/icons/close.png'
import Button from '../StyledComponents/Button';
import AnchorLink from '../StyledComponents/AnchorLink';
import Text from '../StyledComponents/Text';

function Navigation() {

    const [sideNav, setSideNav] = useState(false);

    const [show, handleShow] = useState(false)

    const [inView] = useState(null);

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])


    return (
        <>
            <Nav className='nav__main' show={show} >
                <NavWrapper className='nav__main__logo'>
                    <Text className='logo' >
                        NAGCOM
                    </Text>
                </NavWrapper>
                <NavWrapper
                    className='nav__main__menu'
                    onClick={() => setSideNav(true)} >
                    <Image
                        src={menu}
                        // layout='' 
                        width={30}
                        height={30}
                    />
                </NavWrapper>
                <NavWrapper className='desktop__nav' >
                    <NavWrapper>
                        <AnchorLink route="/#home" >
                            <Button
                                style={inView === 'home' ? 'desktop__nav__btn desktop__nav__btn__active' : 'desktop__nav__btn'} >
                                Home
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper>
                        <AnchorLink route="/#about" >
                            <Button
                                style={inView === 'about' ? 'desktop__nav__btn desktop__nav__btn__active' : 'desktop__nav__btn'}
                            >
                                About
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper>
                        <AnchorLink route="/#companies" >
                            <Button
                                style={inView === 'companies' ? 'desktop__nav__btn desktop__nav__btn__active' : 'desktop__nav__btn'}
                            >
                                Companies
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper>
                        <AnchorLink route="/#contact" >
                            <Button
                                style={inView === 'contact' ? 'desktop__nav__btn desktop__nav__btn__active' : 'desktop__nav__btn'}
                            >
                                Contact
                            </Button>
                        </AnchorLink>
                    </NavWrapper>

                </NavWrapper>
            </Nav>
            <NavWrapper className='mobile_nav' open={sideNav} >
                <NavWrapper
                    className='mobile_nav__close'
                    onClick={() => setSideNav(false)}
                >
                    <Image
                        src={close}
                        // layout='' 
                        width={30}
                        height={30}
                    />
                </NavWrapper>
                <NavWrapper className='mobile_nav_main'>
                    <NavWrapper className='mobile_nav__btn' >
                        <AnchorLink route="/#home" >
                            <Button
                                style={inView === 'home' ? 'mobile__nav__btn mobile__nav__btn_active' : 'mobile__nav__btn'}
                                click={() => setSideNav(false)}
                            >
                                Home
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper className='mobile_nav__btn' >
                        <AnchorLink route="/#about" >
                            <Button
                                style={inView === 'about' ? 'mobile__nav__btn mobile__nav__btn_active' : 'mobile__nav__btn'}
                                click={() => setSideNav(false)}
                            >
                                About
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper className='mobile_nav__btn' >
                        <AnchorLink route="/#companies" >
                            <Button
                                style={inView === 'companies' ? 'mobile__nav__btn mobile__nav__btn_active' : 'mobile__nav__btn'}
                                click={() => setSideNav(false)}
                            >
                                Companies
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper className='mobile_nav__btn' >
                        <AnchorLink route="/#contact" >
                            <Button
                                style={inView === 'contact' ? 'mobile__nav__btn mobile__nav__btn_active' : 'mobile__nav__btn'}
                                click={() => setSideNav(false)}
                            >
                                Contact
                            </Button>
                        </AnchorLink>
                    </NavWrapper>
                </NavWrapper>
            </NavWrapper>
        </>
    );
}

export default Navigation;
