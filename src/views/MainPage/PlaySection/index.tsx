import React from 'react';
import Section from '@components/Section/Section';

interface Props {};

const PlaySection: React.FC<Props> = () => (
  <Section
    title='우리가 매쉬업에서 노는 방식!'
    subTitle={ (
      <>
        매쉬업에서는 개인의 성장과 팀의 성장을 위해 매 기수마다<br />
        각종 세미나와 팀별 스터디가 활발히 진행된다구요!
      </>
    ) }
  >
    호우호우
  </Section>
);

export default PlaySection;
