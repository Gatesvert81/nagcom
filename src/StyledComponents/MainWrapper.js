import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const MainWrapper = styled.div`

position: relative;
width: 100%;
height: 100%;

    &.gateway__band{
        width: 60px;
        border: 5px solid ${COLORS.primary};
        border-radius: 10px;
    }

    &.gateway__main{
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    &.gateway__card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 25vh;
        gap: 10px;
    }

    &.gateway__card__image{
        width: 100%;
        height: 100%; 
        position: relative;
    }

    @media all and (min-width: 800px){
        &.gateway__card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 30vh;
        gap: 10px;
    }
    }


`

export default MainWrapper