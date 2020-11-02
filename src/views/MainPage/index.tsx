import React from 'react';
import S from './MainPage.module.scss';
import PlaySection from '@views/MainPage/PlaySection';
import TeamSection from '@views/MainPage/TeamSection';
import ProjectSection from '@views/MainPage/ProjectSection';
import JoinusSection from '@views/MainPage/JoinusSection';
import HeroSection from '@views/MainPage/HeroSection';
import Header from '@views/MainPage/Header';
import Footer from '@views/MainPage/Footer';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <div className={ S.Container }>
    <Header />
    <HeroSection />
    <PlaySection />
    <TeamSection />
    <ProjectSection />
    <JoinusSection />
    <Footer />
  </div>
)

export default MainPage;
