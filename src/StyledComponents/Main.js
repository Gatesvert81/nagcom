import styled from 'styled-components'
import bg from '../../public/bg.jpg'

const Main = styled.main`

    &.landing{
        width: 100%;
        height: 100vh;
        /* background-color: lavender ; */
        background-image: url(${bg});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    &.gateway, &.about, &.contact{
        width: 100%;
        height: fit-content;
        /* background-color: purple; */
        padding: 20px 10vw;
    }

    &.companies{
        width: 100%;
        height: fit-content;
        /* background-color: indianred; */
        padding-bottom: 20px ;
    }

    @media all and (min-width: 800px){
        &.gateway, &.about, &.contact{
            width: 100%;
            height: fit-content;
            /* background-color: purple; */
            padding: 20px 20vw;
        }
    }


`

export default Main