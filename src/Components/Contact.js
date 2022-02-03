import React from 'react';
import Image from 'next/image';
import Button from '../StyledComponents/Button';
import ContactWrapper from '../StyledComponents/ContactWrapper';
import Input from '../StyledComponents/Input';
import Main from '../StyledComponents/Main';
import Text from '../StyledComponents/Text';
import TextInput from '../StyledComponents/TextInput';
import phone from '../../public/icons/phone.png'
import email from '../../public/icons/email.png'
import location from '../../public/icons/location.png'
import twitter from '../../public/icons/twitter.png'
import whatsapp from '../../public/icons/whatsapp.png'
import instagram from '../../public/icons/ig.png'
import facebook from '../../public/icons/fb.png'
import { useRouter } from 'next/router';

function Contact() {

    const route = useRouter()

    console.log(route.query)

    return (
        <Main className='contact' id="contact" >
            <ContactWrapper className='contact__head'>
                <ContactWrapper className='contact__band' />
                <ContactWrapper>
                    <Text  className='large__text'>
                        CONTACT
                    </Text>
                </ContactWrapper>
            </ContactWrapper>
            <ContactWrapper className='contact__main'>
                <ContactWrapper className='contact__main__message'>
                    <ContactWrapper className='contact__container'>
                        <Input type="text" placeholder='Name' />
                    </ContactWrapper>
                    <ContactWrapper className='contact__container'>
                        <Input type="text" placeholder='Email' />
                    </ContactWrapper>
                    <ContactWrapper className='contact__container'>
                        <TextInput placeholder='Message' />
                    </ContactWrapper>
                    <Button style="primary" >
                        Send Message
                    </Button>
                </ContactWrapper>
                <ContactWrapper className='contact__main__location'>
                    Location
                </ContactWrapper>
            </ContactWrapper>
            <ContactWrapper className='contact__section'>
                <ContactWrapper className='contact__section__main' >
                    <ContactWrapper className='contact__section__container'>
                        <ContactWrapper className='contact__section__icon'>
                            <Image
                                src={phone}
                                // layout='' 
                                width={30}
                                height={30}
                            />
                        </ContactWrapper>
                        <ContactWrapper>
                            <Text className='meduim__text' >
                                030 5014 268
                            </Text>
                        </ContactWrapper>
                    </ContactWrapper>
                    <ContactWrapper className='contact__section__container'>
                        <ContactWrapper className='contact__section__icon'>
                            <Image
                                src={email}
                                // layout='' 
                                width={30}
                                height={30}
                            />
                        </ContactWrapper>
                        <ContactWrapper>
                            <Text className='meduim__text' >
                                info@company.com
                            </Text>
                        </ContactWrapper>
                    </ContactWrapper>
                    <ContactWrapper className='contact__section__container'>
                        <ContactWrapper className='contact__section__icon'>
                            <Image
                                src={location}
                                // layout='' 
                                width={30}
                                height={30}
                            />
                        </ContactWrapper>
                        <ContactWrapper>
                            <Text className='meduim__text' >
                                Accra, Ghana.
                            </Text>
                        </ContactWrapper>
                    </ContactWrapper>
                </ContactWrapper>
                <ContactWrapper className='contact__socials'>
                    <ContactWrapper className='contact__section__icon'>
                        <Image
                            src={whatsapp}
                            // layout='' 
                            width={30}
                            height={30}
                        />
                    </ContactWrapper>
                    <ContactWrapper className='contact__section__icon'>
                        <Image
                            src={twitter}
                            // layout='' 
                            width={30}
                            height={30}
                        />
                    </ContactWrapper>
                    <ContactWrapper className='contact__section__icon'>
                        <Image
                            src={facebook}
                            // layout='' 
                            width={30}
                            height={30}
                        />
                    </ContactWrapper>
                    <ContactWrapper className='contact__section__icon'>
                        <Image
                            src={instagram}
                            // layout='' 
                            width={30}
                            height={30}
                        />
                    </ContactWrapper>
                </ContactWrapper>
            </ContactWrapper>
        </Main  >
    );
}

export default Contact;
