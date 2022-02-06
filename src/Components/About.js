import React from 'react';
import AboutWrapper from '../StyledComponents/AboutWrapper';
import Main from '../StyledComponents/Main';
import MainWrapper from '../StyledComponents/MainWrapper';
import Text from '../StyledComponents/Text';

function About() {
    return (
        <Main className='about' id='about' >
            <AboutWrapper className='about__head' >
                <MainWrapper className='gateway__band' />
                <AboutWrapper>
                    <Text className='large__text' >
                        ABOUT
                    </Text>
                </AboutWrapper>
            </AboutWrapper>
            <AboutWrapper className='about__main'>
                <AboutWrapper className='about__texts' >
                    <Text className='small__text'>
                        345 CONSTRUCTION GROUP LTD is a general and building Construction Company which is committed to the construction or building of all kinds of projects in the construction sector for individuals, companies and government. < br />
                    </Text>
                    <Text className='small__text'>
                        345 CONSTRUCTION GROUP LTD is a general and building Construction Company which is committed to the construction or building of all kinds of projects in the construction sector for individuals, companies and government. < br />
                    </Text>
                    <Text className='small__text'>
                        345 CONSTRUCTION GROUP LTD is a general and building Construction Company which is committed to the construction or building of all kinds of projects in the construction sector for individuals, companies and government. < br />
                    </Text>
                </AboutWrapper>
            </AboutWrapper>
        </Main>
    );
}

export default About;
