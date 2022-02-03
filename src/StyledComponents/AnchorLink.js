import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'

const A = styled.a`
width: 100%;

`

function AnchorLink({children, route}) {
  return (
    <Link href={route} >
        <A>
            {children}
        </A>
    </Link>
    );
}

export default AnchorLink;
