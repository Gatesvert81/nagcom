import styled from 'styled-components'
import bg from '../../public/bg.jpg'
import { COLORS } from '../assets/theme'

const Main = styled.main`

    &.landing, &.company__page__banner{
        width: 100%;
        height: 100vh;
        /* background-color: lavender ; */
        background: url(${bg});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    &.gateway, &.about, &.contact, &.company__page__section{
        width: 100%;
        height: fit-content;
        /* background-color: purple; */
        padding: 50px 10vw 20px;
    }

    &.companies{
        width: 100%;
        height: fit-content;
        padding: 30px 0px 0px ;
    }

    &.companies__page{
        width: 100%;
        height: fit-content;
        padding-top: 5vh ;
    }

    &.company__page__banner{
        width: 100%;
        height: 40vh;
        background-image: url(${props => props.bg});
        background-position: center;
        background-size: cover;
    }

    @media all and (min-width: 800px){
        &.gateway, &.about, &.contact{
            width: 100%;
            height: fit-content;
        }

        &.company__page__banner{
            width: 100%;
            height: 55vh;
            
        }
    }


`

export default Main