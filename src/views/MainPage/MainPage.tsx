import React from 'react';
import S from './MainPage.module.scss';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <div className={ S.Container }>
    안녕하세요
  </div>
)

export default MainPage;
