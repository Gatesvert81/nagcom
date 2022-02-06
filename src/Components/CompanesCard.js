import Image from 'next/image';
import React from 'react';
import CompaniesWrapper from '../StyledComponents/CompaniesWrapper';
import bg from '../../public/bg.jpg'
import Text from '../StyledComponents/Text';
import AnchorLink from '../StyledComponents/AnchorLink';


function CompanesCard({ children, image, companyId }) {
    return (
        <AnchorLink route={`/companies/${companyId}?id=${companyId}`} >
            <CompaniesWrapper image={image} className='company__card' >
                <Image
                    src={image}
                    layout='fill' 
                // width={100}
                // height={100}
                />
                <CompaniesWrapper>
                    <Text className="medium__text " >
                        {children}
                    </Text>
                </CompaniesWrapper>
            </CompaniesWrapper>
        </AnchorLink>
    );
}

export default CompanesCard;
