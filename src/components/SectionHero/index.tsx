/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';

import Container from 'components/Container';

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <Logo />
      <S.Content>
        <S.TextBlock>
          <S.Title>Sacoa Cashless System</S.Title>
          <S.Description>Evolve your business with a system designed by operators for operators!</S.Description>
          <S.ButtonWrapper>
            <Button href='https://www.sacoacard.com/'>Contact us!</Button>
          </S.ButtonWrapper>
        </S.TextBlock>
        <S.Image
          src='https://res.cloudinary.com/dr611hsid/image/upload/v1675113618/Sacoa/Couple-in-amusement-park_ngqs5u.svg'
          alt='Couple in amusement park'
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
