import React from 'react';
import Main from '../StyledComponents/Main';
import MainWrapper from '../StyledComponents/MainWrapper';
import Text from '../StyledComponents/Text';
import bg from '../../public/bg.jpg'
import Image from 'next/image';

function Gateway() {
    return (
        <Main className='gateway' >
            <MainWrapper className='gateway__head' >
                <MainWrapper className='gateway__band' />
                <Text className='large__text'>
                    YOUR TRUSTED <br />
                </Text>
                <Text className='large__text'>
                    GATEWAY
                </Text>
            </MainWrapper>
            <MainWrapper className='gateway__main' >
                <MainWrapper className='gateway__card'>
                    <MainWrapper className='gateway__card__image'>
                        <Image
                            src={bg}
                            layout='fill'
                        />
                    </MainWrapper>
                    <MainWrapper>
                        <Text className='medium__text'>
                            Trading  <br />
                        </Text>
                        <Text className='small__text'>
                        We are specialized in exterior and interior decoration and many constructional works you can think of.
                        </Text>
                    </MainWrapper>
                </MainWrapper>
                <MainWrapper className='gateway__card'>
                    <MainWrapper>
                        <Text className='medium__text'>
                            Construction <br />
                        </Text>
                        <Text className='small__text'>
                        We see to it that our clients are satisfied with us in our relation with them for the construction of their projects and household buildings. 
                        </Text>
                    </MainWrapper>
                    <MainWrapper className='gateway__card__image'>
                        <Image
                            src={bg}
                            layout='fill'
                        />
                    </MainWrapper>
                </MainWrapper>
            </MainWrapper>
        </Main>
    );
}

export default Gateway;
