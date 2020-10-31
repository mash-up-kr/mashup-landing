import React, { useState } from 'react';
import Section from '@components/Section/Section';
import { TEAM } from '@constants/team';
import { TeamSelect } from '@views/MainPage/TeamSection/TeamSelect';

interface Props {};

const TeamSection: React.FC<Props> = () => {
  const [selectedTeam, setSelectedTeam] = useState(TEAM.UXUI);

  return (
    <Section
      title='매쉬업의 멋진 팀들을 소개할게!'
      subTitle={ (
        <>
          매쉬업 사람들이 모이면, 지식과 정보가 넘쳐나고 서로에게<br />
          새로운 도전을 시도 할 수 있는 큰 힘이 되어주고 있어요.
        </>
      ) }
    >
      <TeamSelect
       selectedTeam={ selectedTeam }
       setTeam={ setSelectedTeam }
      />
    </Section>
  );
}

export default TeamSection;
