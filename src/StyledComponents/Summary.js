import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Wrapper = styled.summary`

    transition: 0.5s ease;
    text-align: left;

`

const Details = styled.details`

    transition: 0.5s ease;
    text-align: left;

`

function Summary({ summary, children }) {
    return (
        <Details>
            <Wrapper>
                {summary}...
            </Wrapper>
            <Text className='small__text' >
                {children}
            </Text>
        </Details>
    );
}

export default Summary;
