import styled from 'styled-components'

const MainWrapper = styled.div`

position: relative;
width: 100%;
height: 100%;

    &.gateway__band{
        width: 60px;
        border: 5px solid black;
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


`

export default MainWrapper