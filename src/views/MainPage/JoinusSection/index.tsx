import React from 'react';
import Section from '@components/Section/Section';
import { Talk } from '@components/Talk';
import { JOIN_US_TALK } from '@constants/talk';

interface Props {};

const JoinusSection: React.FC<Props> = () => (
  <Section
    title='매쉬업에서 같이 놀자!'
    subTitle={ (
      <>
        개발에 목 마르고 디자인에 허기진 당신!<br />
        매쉬업에서 재미있는 프로젝트 같이 안할래요?
      </>
    ) }
  >
    <Talk talks={ JOIN_US_TALK } />
  </Section>
);

export default JoinusSection;
