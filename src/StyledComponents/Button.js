import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.button`

    background-color: transparent ;
    border:none;

    &.primary{
        width: fit-content;
        height: fit-content;
        border: 2px solid black;
        padding: 10px 20px;
        text-align: center;
    }

    &.desktop__nav__btn{
        text-align: center;
        color: black;
        font-size: 0.75rem;
        font-weight: 500;
    }

    &.mobile__nav__btn{
        width: 100%;
        height: 50px;
        padding: 10px;
        text-align: center;
        color: black;
        font-size: 2rem;
        font-weight: 500;
    }

    &.mobile__nav__btn_active{
        font-weight: 700;
        font-size: 2.2rem
    }

    &.desktop__nav__btn__active{
        font-weight: 700;
        font-size: 1rem
    }

`


function Button({ children, style, click }) {
    return (
        <Wrapper className={style} onClick={click} >
            {children}
        </Wrapper>
    );
}

export default Button;
