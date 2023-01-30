import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';

const SectionAbout = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src='https://res.cloudinary.com/dr611hsid/image/upload/v1675113631/Sacoa/Woman-paying-cashlessely_y9flsv.svg'
          loading='lazy'
        />
        <div>
          <Heading>Why choose Sacoa Cashless System?</Heading>
          <S.Text>
            <p>
              Sacoa is the <strong>leading worldwide</strong> supplier of revenue management systems for the amusement,
              entertainment, and leisure industries with more than 2200 installations in +70 countries.
            </p>
            <p>
              Sacoa Cashless System includes great money-making features <strong>impossible to achieve</strong> by
              traditional means or with other cashless systems and also prevents cashiers from cheating the operator or
              customers.
            </p>
            <p>
              While average card system revenues <strong>increase 20 to 30%</strong> over token or cash play, many of
              our customers report even higher earnings.
            </p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);

export default SectionAbout;
