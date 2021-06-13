import React, { useCallback } from 'react';

import S from './styles.module.scss';
import { TEAM, TEAM_LIST } from '@constants/talk';
import { collectGaEvent } from '@utils/google';

interface Props {
  selectedTeam: TEAM,
  setTeam: React.Dispatch<TEAM>,
}

export const TeamSelect: React.FC<Props> = ({ selectedTeam, setTeam }: Props) => {
  const onNavigateTo = useCallback((event, target: string) => {
    event.preventDefault();
    const element = document.getElementById(target);
    const { top } = element?.getBoundingClientRect();
    const offset = pageYOffset;
    scrollTo(0, Math.max(offset + top, 0));

    collectGaEvent(`FAQ_${selectedTeam}_선택`);
  }, []);

  return (
    <ul
      className={ S.Container }
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      {
        TEAM_LIST.map((team) => (
          <li
            key={ team }
            className={ team === selectedTeam ? S.SelectedLabel : S.Label }
            onClick={ (event) => {
              onNavigateTo(event, 'team');
              setTeam(team);
            } }
          >
            { team }
          </li>
        ))
      }
    </ul>
  );
}
