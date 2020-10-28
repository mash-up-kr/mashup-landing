import React from 'react';
import Section from '@components/Section/Section';

interface Props {};

const ProjectSection: React.FC<Props> = () => (
  <Section
    title='우리가 만든 것들 한 번 볼래?'
    subTitle={ (
      <>
        함께 머리를 맞대어 어려운 난관에도 절대 물러서는 법이 없지!<br />
        매 기수마다 팀을 구성하고, 협업을 통해 프로젝트를 배포해요.
      </>
    ) }
  >
    호우호우
  </Section>
);

export default ProjectSection;
