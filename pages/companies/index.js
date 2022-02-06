import Head from 'next/head';
import React from 'react';
import CompanesCard from '../../src/Components/CompanesCard';
import CompaniesWrapper from '../../src/StyledComponents/CompaniesWrapper';
import Main from '../../src/StyledComponents/Main';
import Text from '../../src/StyledComponents/Text';

function index({ data }) {
    

    return (
        <Main className="companies__page" id="companies" >
            <Head>
                <title>Our Companies</title>
                <meta name="Nagcom Companies" content="Nagcom Groupof companies aspires to make life effortless for people no matter thier age of financial background." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CompaniesWrapper className="companies__head">
                <CompaniesWrapper className="companies__band" />
                <Text className="large__text">
                    OUR COMPANIES
                </Text>
            </CompaniesWrapper>
            <CompaniesWrapper className="companies__page__text" >
                <Text className="small__text" >
                    Nagcom has dsudw dnowed cnoqucasnoaiw cnouec aoxnioec aosuq aoshpc paeurv nuisiuhdc PEU scnishpc siduwc paiurv enviw sdenpan uwne viuswpniuwesnd w pwu.
                </Text>
            </CompaniesWrapper>
            <CompaniesWrapper className="companies__main">
                {
                    data?.map((company) => (
                        <CompanesCard key={company?.id} companyId={company?.id} image={company?.image} >
                            {company?.name}
                        </CompanesCard>
                    ))
                }
            </CompaniesWrapper>
        </Main>

    );
}



export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/companies')
    const data = await response.json()
    return {
        props: {
            data
        }
    }
}

export default index;
