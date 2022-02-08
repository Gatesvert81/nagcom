import React from 'react';
import CompaniesWrapper from '../../src/StyledComponents/CompaniesWrapper';
import Main from '../../src/StyledComponents/Main';
import bg from '../../public/bg.jpg'
import HomeWrapper from '../../src/StyledComponents/HomeWrapper';
import Text from '../../src/StyledComponents/Text';
import Button from '../../src/StyledComponents/Button';
import Summary from '../../src/StyledComponents/Summary';
import UnorderedList from '../../src/StyledComponents/UnorderedList';
import Head from 'next/head';
import MainWrapper from '../../src/StyledComponents/MainWrapper';
import companyDetails from '../../src/assets/companiesDetails'

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
                <Text className='medium__text' >
                    Telephone
                </Text>
                <UnorderedList lists={companyDetail?.contacts?.telephone} />
                <Text className='medium__text' >
                    Email <br/>
                </Text>
                <UnorderedList lists={[companyDetail?.contacts?.email]} />
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
