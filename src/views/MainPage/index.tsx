import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import S from './MainPage.module.scss';
import PlaySection from '@views/MainPage/PlaySection';
import TeamSection from '@views/MainPage/TeamSection';
import ProjectSection from '@views/MainPage/ProjectSection';
import JoinusSection from '@views/MainPage/JoinusSection';
import HeroSection from '@views/MainPage/HeroSection';
import Header from '@views/MainPage/Header';
import Footer from '@views/MainPage/Footer';
import { initializeGa } from '@utils/google';
import ChannelService from '@utils/services/ChannelService';


interface Props {}

const MainPage: React.FC<Props> = () => {

  useEffect(() => {
    initializeGa();

    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'container',
      animatedClassName: 'aos-animate',
      useClassNames: true,
      disableMutationObserver: true,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
    });

    const cService = new ChannelService();
    cService.boot({
      'pluginKey': 'de276621-7c75-4d6b-a3e8-27b96c53fc6e',
    });
  }, []);

  return (
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
}

export default MainPage;
