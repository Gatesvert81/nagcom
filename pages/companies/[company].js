import React from 'react';
import CompaniesWrapper from '../../src/StyledComponents/CompaniesWrapper';
import Main from '../../src/StyledComponents/Main';
import HomeWrapper from '../../src/StyledComponents/HomeWrapper';
import Text from '../../src/StyledComponents/Text';
import Button from '../../src/StyledComponents/Button';
import Summary from '../../src/StyledComponents/Summary';
import UnorderedList from '../../src/StyledComponents/UnorderedList';
import Head from 'next/head';
import MainWrapper from '../../src/StyledComponents/MainWrapper';
import companyDetails from '../../src/assets/companiesDetails'
import ContactWrapper from '../../src/StyledComponents/ContactWrapper';
import AnchorLink from '../../src/StyledComponents/AnchorLink';
import Image from 'next/image';
import whatsapp from '../../public/icons/whatsapp.png'
import facebook from '../../public/icons/fb.png'


const CompanySection = ({ title, children }) => (
    <Main className='company__page__section' >
        <CompaniesWrapper className="company__page__section__head">
            <MainWrapper className='gateway__band' />
            <Text className="large__text">
                {title}
            </Text>
        </CompaniesWrapper>
        <CompaniesWrapper>
            <Text className="small__text" >
                {children}
            </Text>
        </CompaniesWrapper>
    </Main>
)

function company({ id }) {


    const selected = companyDetails.filter((item) => {
        return item.id === parseInt(id)
    })

    const companyDetail = selected[0]


    const summarizedAbout = () => {
        const aboutArr = companyDetail?.about.split('.')
        const summary = aboutArr.splice(0, 1)
        const detail = aboutArr.join('. ')
        return (
            <Summary summary={summary} >
                {detail}
            </Summary>
        )

    }

    return (
        <CompaniesWrapper className='company__page' >
            <Head>
                <title>{companyDetail.name}</title>
                <meta name={companyDetail?.name} content="Nagcom Groupof companies aspires to make life effortless for people no matter thier age of financial background." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main className='company__page__banner' bg={companyDetail?.image} id='home' >
                <HomeWrapper className='landing__main'>
                    <Text className='large__text white textShadow' >
                        {companyDetail?.name} <br />
                    </Text>
                    <Text className='medium__text white' >
                        {companyDetail?.slogan}
                    </Text>
                </HomeWrapper>
                <HomeWrapper>
                    <Button style="primary" >
                        Explore
                    </Button>
                </HomeWrapper>
            </Main>
            <CompanySection title="About" >
                {summarizedAbout()}
            </CompanySection>
            <CompanySection title="Directors / Owners" >
                {companyDetail?.directors?.details}
            </CompanySection>
            <CompanySection title="Vision" >
                <UnorderedList lists={companyDetail?.vision} />
            </CompanySection>
            <CompanySection title="Investor(s)" >
                {companyDetail?.investors}
            </CompanySection>
            <CompanySection title="Contact" >
                <CompaniesWrapper className='company__contact__section' >
                    <Text className='medium__text left' >
                        Telephone
                    </Text>
                    <UnorderedList lists={companyDetail?.contacts?.telephone} />
                </CompaniesWrapper>
                <CompaniesWrapper className='company__contact__section'>
                    <Text className='medium__text left' >
                        Email <br />
                    </Text>
                    <UnorderedList lists={[companyDetail?.contacts?.email]} />
                </CompaniesWrapper>
                <CompaniesWrapper className='company__contact__section'>
                    <Text className='medium__text left' >
                        Social Media <br />
                    </Text>
                    <CompaniesWrapper className='company__contact__section__social'>
                        <CompaniesWrapper>
                            <AnchorLink route={companyDetail?.contacts.social.whatsapp} target={true} pass={true}>
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
                        </CompaniesWrapper>
                        <CompaniesWrapper className='company__contact__section__social'>
                            <AnchorLink route={companyDetail?.contacts.social.facebook} target={true} pass={true}>
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
                                            {companyDetail?.name}
                                        </Text>
                                    </ContactWrapper>
                                </ContactWrapper>
                            </AnchorLink>
                        </CompaniesWrapper>
                    </CompaniesWrapper>
                </CompaniesWrapper>
            </CompanySection>
        </CompaniesWrapper>
    );
}

export async function getStaticPaths() {

    const paths = companyDetails?.map((data) => ({
        params: { company: data?.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.company
    return {
        props: {
            id
        }
    }
}



export default company;
