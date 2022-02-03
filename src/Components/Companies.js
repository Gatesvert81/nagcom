import React from 'react';
import CompaniesWrapper from '../StyledComponents/CompaniesWrapper';
import CompanesCard from './CompanesCard';
import Text from '../StyledComponents/Text';
import Main from '../StyledComponents/Main';
import hics from '../../public/bg.jpg'
import construction from '../../public/bg.jpg'
import broadcasting from '../../public/broadcasting.jpg'
import fss from '../../public/bg.jpg'
import consult from '../../public/consulting.jpg'
import ghambridge from '../../public/bg.jpg'
import elohe from '../../public/bg.jpg'
import heaven from '../../public/estate.jpg'

function Companies() {

    const allCompanies = [
        {
            id: 1,
            name: 'HICS',
            image: hics
        },
        {
            id: 2,
            name: '345 construction',
            image: construction
        },
        {
            id: 3,
            name: 'Goye Broadcasting',
            image: broadcasting
        },
        {
            id: 4,
            name: 'FSS',
            image: fss
        },
        {
            id: 5,
            name: 'Big Holdings Consult',
            image: consult
        },
        {
            id: 6,
            name: 'Ghambridge College',
            image: ghambridge
        },
        {
            id: 7,
            name: 'ELOHE',
            image: elohe
        },
        {
            id: 8,
            name: 'Heavens Gates',
            image: heaven
        }
    ]

  return (
      <Main className="companies" id="companies" >
          <CompaniesWrapper className="companies__head">
              <CompaniesWrapper className="companies__band"/>
              <Text  className="large__text">
                  OUR COMPANIES
              </Text>
          </CompaniesWrapper>
          <CompaniesWrapper className="companies__main">
            {
                allCompanies?.map((company) => (
                    <CompanesCard key={company?.id} image={company?.image} >
                        {company?.name}
                    </CompanesCard>
                ))
            }
          </CompaniesWrapper>
      </Main>

    );
}

export default Companies;
