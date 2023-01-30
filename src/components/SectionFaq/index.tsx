import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';
import faq from './content';

import * as S from './styles';

const SectionFaq = () => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>FAQ</Heading>
        <S.Questions>
          {faq.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>
      </Container>
    </S.Content>
  </S.Wrapper>
);

export default SectionFaq;
