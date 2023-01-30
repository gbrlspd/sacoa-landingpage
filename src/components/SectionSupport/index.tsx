import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';

const SectionSupport = () => (
  <Container>
    <Heading reverseColor>The best support team!</Heading>
    <S.Text>
      <p>
        You deserve the best and we will work side by side with you to make sure you get it. You are most welcome to
        contact our customers directly to see for yourself what we are talking about.
      </p>
      <p>
        We provide an outstanding 24/7 emergency support as we understand the entertainment business is vital during
        weekends and holidays as well, not just 9 to 5 on weekdays.
      </p>
    </S.Text>
  </Container>
);

export default SectionSupport;
