import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import icons from './content';

import * as S from './styles';

const SectionSolutions = () => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Our Solutions</Heading>
      <S.IconsContainer>
        {icons.map(({ name, image }) => (
          <S.Icon key={name}>
            <S.Icons src={image} alt={name} loading='lazy' />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);

export default SectionSolutions;
