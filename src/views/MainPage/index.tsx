import React from 'react';
import S from './MainPage.module.scss';
import PlaySection from '@views/MainPage/PlaySection/PlaySection';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <div className={ S.Container }>
    <PlaySection />
  </div>
)

export default MainPage;
