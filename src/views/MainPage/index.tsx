import React from 'react';
import S from './MainPage.module.scss';
import PlaySection from '@views/MainPage/PlaySection';
import TeamSection from '@views/MainPage/TeamSection';
import ProjectSection from '@views/MainPage/ProjectSection';
import JoinusSection from '@views/MainPage/JoinusSection';
import HeroSection from '@views/MainPage/HeroSection';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <div className={ S.Container }>
    <HeroSection />
    <PlaySection />
    <TeamSection />
    <ProjectSection />
    <JoinusSection />
  </div>
)

export default MainPage;
