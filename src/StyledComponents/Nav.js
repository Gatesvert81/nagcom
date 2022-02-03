import styled from 'styled-components'

const Nav = styled.nav`

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
        background-color: ${ props => props.show ? "lavender" : "transparent" }
    }

`

export default Nav