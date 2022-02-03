import React from 'react';
import Main from '../StyledComponents/Main';
import HomeWrapper from '../StyledComponents/HomeWrapper';
import Text from '../StyledComponents/Text';
import Button from '../StyledComponents/Button';
import bg from '../../public/bg.jpg'
import Image from 'next/image';


function Landing() {
    return (
        <Main className='landing' bg={bg} id='home' >
            <HomeWrapper className='landing__main'>
                <Text className='medium__text white' >
                    ITS AMAZING WHAT <br />
                </Text>
                <Text className='large__text white' >
                    YOU CAN ACHIEVE <br />
                </Text>
                <Text className='medium__text white' >
                    WHEN YOU WORK WITH US
                </Text>
            </HomeWrapper>
            <HomeWrapper>
                <Button style="primary" >
                    READ MORE
                </Button>
            </HomeWrapper>
        </Main>
    );
}

export default Landing;
