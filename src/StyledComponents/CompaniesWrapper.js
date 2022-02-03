import styled from 'styled-components'

const CompaniesWrapper = styled.div`

        position: relative;

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
            padding: 20px 20vw;
        }
    }

`

export default CompaniesWrapper