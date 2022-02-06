import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul``

const List = styled.li`

    text-align: left;

`

function UnorderedList({ lists }) {
    return (
        <Ul >
            {
                lists?.map((list, index) => (
                    <List key={index} >
                        {list}
                    </List>
                ))
            }
        </Ul>
    );
}

export default UnorderedList;
