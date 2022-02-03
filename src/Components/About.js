import React from 'react';
import AboutWrapper from '../StyledComponents/AboutWrapper';
import Main from '../StyledComponents/Main';
import Text from '../StyledComponents/Text';

function About() {
    return (
        <Main className='about' id='about' >
            <AboutWrapper className='about__head' >
                <AboutWrapper className='about__band' />
                <AboutWrapper>
                    <Text className='large__text' >
                        ABOUT
                    </Text>
                </AboutWrapper>
            </AboutWrapper>
            <AboutWrapper className='about__main'>
                <AboutWrapper className='about__texts' >
                    <Text className='small__text'>
                        Anos coije voffnsu wncos8wwn 0whfwop
                        w8w hiowdci we97cqp9ud pwd9c pwdch
                        cweiocwe wdicweoc. < br/>
                    </Text>
                    <Text className='small__text'>
                        Anos coije voffnsu wncos8wwn 0whfwop
                        w8w hiowdci we97cqp9ud pwd9c pwdch
                        cweiocwe wdicweoc. < br/>
                    </Text>
                    <Text className='small__text'>
                        Anos coije voffnsu wncos8wwn 0whfwop
                        w8w hiowdci we97cqp9ud pwd9c pwdch
                        cweiocwe wdicweoc. < br/>
                    </Text>
                </AboutWrapper>
            </AboutWrapper>
        </Main>
    );
}

export default About;
