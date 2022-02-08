import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'

const A = styled.a`
width: 100%;

`

function AnchorLink({children, route, pass, target}) {
  return (
    <Link href={route} passHref={pass || false } >
        <A target={ target ? "_blank" : null } >
            {children}
        </A>
    </Link>
    );
}

export default AnchorLink;
