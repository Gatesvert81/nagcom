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
                        // width={100}
                        // height={100}
                        />
                    </MainWrapper>
                    <MainWrapper>
                        <Text className='medium__text'>
                            Trading & Construction <br />
                        </Text>
                        <Text className='small__text'>
                            Anos coije voffnsu wncos8wwn 0whfwop
                            w8w hiowdci we97cqp9ud pwd9c pwdch
                            cweiocwe wdicweoc.
                        </Text>
                    </MainWrapper>
                </MainWrapper>
                <MainWrapper className='gateway__card'>
                    <MainWrapper>
                        <Text className='medium__text'>
                            Trading & Construction <br />
                        </Text>
                        <Text className='small__text'>
                            Anos coije voffnsu wncos8wwn 0whfwop
                            w8w hiowdci we97cqp9ud pwd9c pwdch
                            cweiocwe wdicweoc.
                        </Text>
                    </MainWrapper>
                    <MainWrapper className='gateway__card__image'>
                        <Image
                            src={bg}
                            layout='fill'
                        // width={100}
                        // height={100}
                        />
                    </MainWrapper>
                </MainWrapper>
            </MainWrapper>
        </Main>
    );
}

export default Gateway;
