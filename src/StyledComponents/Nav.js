import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const Nav = styled.nav`

    transition: 0.3s ease;

    &.nav__main{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0px;
        padding: 10px 10vw;
        z-index: 100;
        background-color: ${ props => props.show ? COLORS.secondary : "transparent" };
        box-shadow: ${ props => props.show ? '2px 1px 3px darkblue' : "none" };
        color: ${ props => props.show ? 'black' : "white" }
    }

`

export default Nav