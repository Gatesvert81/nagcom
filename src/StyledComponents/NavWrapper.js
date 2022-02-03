import styled from 'styled-components'

const NavWrapper = styled.div`
position: relative;
transition: 0.5s ease;

    &.nav__main__menu{
        width: 30px;
        height: 30px;
        position: relative;
    }  

    &.desktop__nav{
        display: none;
    } 

    &.mobile_nav{
        display: ${props => props.open ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        background-color: white ;
        padding: 20px 10vw;
        gap: 5vh;
        z-index: 1000;
    }

    &.mobile_nav__close{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
    }

    &.mobile_nav_main{
        width: 100%;
        /* background-color: beige ; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70%;
        gap: 50px;
    }

    &.mobile_nav__btn{
        width: 100%;
    }

    @media all and (min-width: 490px){

        &.desktop__nav{
            display: flex;
            flex-direction: row ;
            justify-content: space-between;
            align-items: center;
            gap: 5vw;
        } 

        &.nav__main__menu{
            display: none;
        }
    }

`

export default NavWrapper