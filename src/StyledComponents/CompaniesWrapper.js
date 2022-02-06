import styled from 'styled-components'

const CompaniesWrapper = styled.div`

        position: relative;
        transition: 0.3s ease;

    &.companies__head{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px 10vw;
    }

    &.companies__band{
        width: 60px;
        border: 5px solid black;
        border-radius: 10px;
    }

    &.companies__main{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    &.company__card{
        width: 100%;
        height: 150px;
        background-color: lavender ;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 10px;
        position: relative;
        color: white;
        cursor: pointer;
    }

    &.company__card:hover{
        box-shadow: 1px 1px 2px black, 0 0 10px blue, 0 0 5px darkblue;
        text-shadow: 1px 1px 2px black, 0 0 10px blue, 0 0 5px darkblue;
    }

    &.company__page{
        width: 100%;
        height: 100%;
    }

    @media all and (min-width: 490px){
        &.companies__main{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    @media all and (min-width: 800px){
        
        &.companies__head{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            /* padding: 20px 20vw; */
        }
    }

`

export default CompaniesWrapper