/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import Button from 'components/Button';

import * as S from './styles';

const PricingBox = () => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        From <span>$100</span> to
      </S.FullPrice>
      <S.DiscountPrice>Free!</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>Emergency support 24/7</S.BenefitsItem>
      <S.BenefitsItem>Training of the system modules</S.BenefitsItem>
      <S.BenefitsItem>Consulting based on your business reports</S.BenefitsItem>
    </S.BenefitsList>
    <Button href='https://www.sacoacard.com/'>
      <p>Get this support for</p>
      <S.ButtonDiscountPrice>Free!</S.ButtonDiscountPrice>
    </Button>
  </S.Box>
);

export default PricingBox;
