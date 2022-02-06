import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const HomeWrapper = styled.div`

    &.home{
        width: 100%;
        min-height: 100vh;
        background-color: ${COLORS.background};
    }

    &.landing__main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
    }

`


export default HomeWrapper