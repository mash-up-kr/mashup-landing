import S from './styles.module.scss';
import { LottieView } from '@components/LottieView';

import HERO from '@resources/lottie/hero.json';
import HERO_MOBILE from '@resources/lottie/m_hero.json';

const HeroSection = () => (
  <section className={ S.Container }>
    <div className={ S.TitleWrap }>
      <p className={ S.SubTitle }>
        성장의 즐거움을 아는 친구들,<br className={ S.IsMobile } />  IT개발 동아리 매쉬업
      </p>
      <h1 className={ S.Title }>
        Mash Up<br className={ S.IsMobile } /> Your Ideas!
      </h1>
    </div>
    <div className={ S.Animation }>
      <LottieView animationData={ HERO } lottieId='hero_pc' classStyle={ S.Lottie } />
      <LottieView animationData={ HERO_MOBILE } lottieId='hero_mobile' classStyle={ S.LottieMobile } />
    </div>
  </section>
);

export default HeroSection;
