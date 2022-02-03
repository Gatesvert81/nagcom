import styled from 'styled-components'

const ContactWrapper = styled.div`

    &.contact__head{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    &.contact__band{
        width: 60px;
        border: 5px solid black;
        border-radius: 10px;
    }

    &.contact__main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
    }

    &.contact__main__message{
        width: 100%;
        height: 100%;
    }

    &.contact__main__location{
        width: 100%;
        height: 30vh;
        background-color: indianred ;
    }

    &.contact__container {
        width: 100%;
        height: 100%;
        padding-bottom: 10px ;
    }

    &.contact__section{
        width: 100%;
    }

    &.contact__section__main{
        width: 100%;
        display: flex;
        flex-direction: column;
        
    }
    
    &.contact__section__container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 10px 0px;
    }

    &.contact__socials{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media all and (min-width: 490px){
        
        &.contact__main{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            /* justify-content: flex-start; */
            /* align-items: flex-start; */
            gap: 20px;
        }

        &.contact__main__location{
            width: 100%;
            height: 30vh;
            background-color: indianred ;
        }

        /* &.contact__section{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between; 
            align-items: center;
            background-color: indianred ;
        } */

        &.contact__section__main{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

    }

`

export default ContactWrapper