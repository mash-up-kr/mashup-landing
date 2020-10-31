import React from 'react';

import S from './styles.module.scss';
import { TEAM, TEAM_LIST } from '@constants/talk';

interface Props {
  selectedTeam: TEAM,
  setTeam: React.Dispatch<TEAM>,
}

export const TeamSelect: React.FC<Props> = ({ selectedTeam, setTeam }: Props) => (
  <ul className={ S.Container }>
    <div className={ S.TopShadow } />
    {
      TEAM_LIST.map((team) => (
        <li
          key={ team }
          className={ team === selectedTeam ? S.SelectedLabel : S.Label }
          onClick={ () => { setTeam(team); } }
        >
          { team }
        </li>
      ))
    }
    <div className={ S.Shadow } />
  </ul>
);
