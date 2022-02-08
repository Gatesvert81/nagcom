import React from 'react';
import Image from 'next/image';
import axios from 'axios'
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
import MainWrapper from '../StyledComponents/MainWrapper';
import Iframe from '../StyledComponents/Iframe';
import AnchorLink from '../StyledComponents/AnchorLink';
import Form from '../StyledComponents/Form'

function Contact() {
    

    const sendMessage = async (e) => {
        e.preventDefault()

        const {name, email, message} = e.target.elements
        const nameText = name.value
        const emailText = email.value
        const textMessage = message.value

        const condition = (nameText.length > 1) && (emailText.length > 1) && (textMessage.length > 1)

        console.log(condition)

        if(!condition){
            alert('Please fill in all field')
            return;
        }

        name.value = ''
        email.value = ''
        message.value = ''

        const messageText = `
            Name: ${nameText}
            Email: ${emailText}
            Message: ${textMessage}
        `
        await axios.post('https://smstextapi.herokuapp.com/send-text', {
            messageText,
            to: '+233505920929'
        })
        .then(() => alert('Message has been sent'))
        .catch((error) => alert(error.message))
    }



    return (
        <Main className='contact' id="contact" >
            <ContactWrapper className='contact__head'>
                <MainWrapper className='gateway__band' />
                <ContactWrapper>
                    <Text className='large__text'>
                        CONTACT
                    </Text>
                </ContactWrapper>
            </ContactWrapper>
            <ContactWrapper className='contact__main'>
                <Form onSubmit={sendMessage} className='contact__main__message'>
                    <ContactWrapper className='contact__container'>
                        <Input 
                            type="text" 
                            placeholder='Name' 
                            name="name" />
                    </ContactWrapper>
                    <ContactWrapper className='contact__container'>
                        <Input 
                            type="text" placeholder='Email'
                            name="email" 
                             />
                    </ContactWrapper>
                    <ContactWrapper className='contact__container'>
                        <TextInput 
                            placeholder='Message' 
                            name="message"
                            />
                    </ContactWrapper>
                    <Button style="secondary" type="submit" >
                        Send Message
                    </Button>
                </Form>
                <ContactWrapper className='contact__main__location'>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15874.741567781039!2d-0.0914454!3d5.8997389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4d00d5d587bc0e4!2sShai-Osudoku%20District%20Hospital!5e0!3m2!1sen!2sgh!4v1644104984921!5m2!1sen!2sgh"
                        allowfullscreen="" loading="lazy"></Iframe>
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
                                info@niiadjekweigroup.com.gh
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
                    <ContactWrapper>
                        <AnchorLink route='https://wa.me/+233548931633' pass={true} target={true}>
                            <ContactWrapper className='contact__section__icon'>
                                <ContactWrapper className='contact__section__icon__image' >
                                    <Image
                                        src={whatsapp}
                                        // layout='' 
                                        width={30}
                                        height={30}
                                    />
                                </ContactWrapper>
                                <ContactWrapper className='contact__section__icon__text'>
                                    <Text className='small__text'>
                                        054 893 1633
                                    </Text>
                                </ContactWrapper>
                            </ContactWrapper>
                        </AnchorLink>
                    </ContactWrapper>
                    <ContactWrapper>
                        <AnchorLink route='https://web.facebook.com/345constructiongroup' target={true} pass={true} >
                            <ContactWrapper className='contact__section__icon'>
                                <ContactWrapper className='contact__section__icon__image' >
                                    <Image
                                        src={twitter}
                                        // layout='' 
                                        width={30}
                                        height={30}
                                    />
                                </ContactWrapper>
                                <ContactWrapper className='contact__section__icon__text'>
                                    <Text className='small__text'>
                                        @nagcom_limited
                                    </Text>
                                </ContactWrapper>
                            </ContactWrapper>
                        </AnchorLink>
                    </ContactWrapper>
                    <ContactWrapper>
                        <AnchorLink route='https://web.facebook.com/345constructiongroup' target={true} pass={true}>
                            <ContactWrapper className='contact__section__icon'>
                                <ContactWrapper className='contact__section__icon__image' >
                                    <Image
                                        src={facebook}
                                        // layout='' 
                                        width={30}
                                        height={30}
                                    />
                                </ContactWrapper>
                                <ContactWrapper className='contact__section__icon__text'>
                                    <Text className='small__text'>
                                        NAGCOM Limited
                                    </Text>
                                </ContactWrapper>
                            </ContactWrapper>
                        </AnchorLink>
                    </ContactWrapper>
                    <ContactWrapper>
                        <AnchorLink route='https://web.facebook.com/345constructiongroup' target={true} pass={true}>
                            <ContactWrapper className='contact__section__icon'>
                                <ContactWrapper className='contact__section__icon__image' >
                                    <Image
                                        src={instagram}
                                        // layout='' 
                                        width={30}
                                        height={30}
                                    />
                                </ContactWrapper>
                                <ContactWrapper className='contact__section__icon__text'>
                                    <Text className='small__text'>
                                        @nagcom_limited
                                    </Text>
                                </ContactWrapper>
                            </ContactWrapper>
                        </AnchorLink>
                    </ContactWrapper>
                </ContactWrapper>
            </ContactWrapper>
        </Main  >
    );
}

export default Contact;
