import styled from 'styled-components'


const Text = styled.span`

    text-align: center;

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

`

export default Text