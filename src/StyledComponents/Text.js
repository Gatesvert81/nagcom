import styled from 'styled-components'
import { COLORS } from '../assets/theme'


const Text = styled.span`

    text-align: center;
    transition: 0.3s ease;
    &.small__text{
        font-size: 0.8rem;
        font-weight: 500;
    }

    &.medium__text{
        font-size: 1.2rem;
        font-weight: 600;
    }

    &.large__text{
        font-size: 2rem;
        font-weight: 700;
    }

    &.white{
        color: white;
    }

    &.left{
        width: 100%;
        text-align: left;
    }

    &.textShadow{
        /* text-shadow: 3px 2px 3px ${COLORS.primary}; */
        text-shadow: 1px 1px 2px black, 0 0 10px blue, 0 0 5px darkblue;
    }

    &.logo{
        font-size: 1rem;
        font-weight: 700;
        /* text-shadow: 2px 1px 1px ${COLORS.primary}; */
        color: black;
        letter-spacing: 2px;
    }

`

export default Text