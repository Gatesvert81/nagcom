import React from 'react';
import CompaniesWrapper from '../StyledComponents/CompaniesWrapper';
import CompanesCard from './CompanesCard';
import Text from '../StyledComponents/Text';
import Main from '../StyledComponents/Main';
import MainWrapper from '../StyledComponents/MainWrapper';

function Companies({ data }) {

    return (
        <Main className="companies" id="companies" >
            <CompaniesWrapper className="companies__head">
                <MainWrapper className='gateway__band' />
                <Text className="large__text">
                    OUR COMPANIES
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



export default Companies;
