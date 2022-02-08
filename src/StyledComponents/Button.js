import React from 'react';
import styled from 'styled-components'
import { COLORS } from '../assets/theme';

const Wrapper = styled.button`

    background-color: transparent ;
    border:none;
    transition: 0.3s ease;
    cursor: pointer;

    &.primary{
        width: fit-content;
        height: fit-content;
        border: 2px solid ${COLORS.primary};
        padding: 10px 20px;
        text-align: center;
        color: ${COLORS.secondary};
        border-radius: 5px;
        font-weight: 700;
        letter-spacing: 1px;
    }

    &.primary:hover{
        background: ${COLORS.primary};
    }

    &.secondary{
        width: 100%;
        height: fit-content;
        border: 2px solid ${COLORS.primary};
        padding: 10px 20px;
        text-align: center;
        color: ${COLORS.secondary};
        border-radius: 5px;
        background: ${COLORS.primary};
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
        color: ${COLORS.primary};
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


function Button({ children, style, click, type }) {
    return (
        <Wrapper className={style} onClick={click} type={type} >
            {children}
        </Wrapper>
    );
}

export default Button;
