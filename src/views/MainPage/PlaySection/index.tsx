import React from 'react';
import Section from '@components/Section/Section';
import { ImageGridView } from '@components/ImageGridView';

import IMG_TEAM_1 from '@resources/images/team_1.jpg';
import IMG_TEAM_2 from '@resources/images/team_2.jpg';
import IMG_TEAM_3 from '@resources/images/team_3.jpg';
import IMG_WEBINAR_1 from '@resources/images/webinar_1.jpg';
import IMG_WEBINAR_2 from '@resources/images/webinar_2.jpg';
import IMG_WEBINAR_3 from '@resources/images/webinar_3.jpg';
import IMG_HACK_1 from '@resources/images/hack_1.jpg';
import IMG_HACK_2 from '@resources/images/hack_2.jpg';
import IMG_HACK_3 from '@resources/images/hack_3.jpg';

import S from './styles.module.scss';
import Slider from 'react-slick';

interface Props {};

const IMAGES = {
  TEAM_STUDY: [IMG_TEAM_1, IMG_TEAM_2, IMG_TEAM_3],
  WEBINAR: [IMG_WEBINAR_1, IMG_WEBINAR_2, IMG_WEBINAR_3],
  HACKATHON: [IMG_HACK_1, IMG_HACK_2, IMG_HACK_3],
}
const { TEAM_STUDY, WEBINAR, HACKATHON } = IMAGES;

const PlaySection: React.FC<Props> = () => {
  const sliderOptions = {
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: '16px',
    speed: 500,
  }

  return (
    <Section
      sectionId='program'
      hasPadding={ false }
      title='우리가 매쉬업에서 노는 방식!'
      subTitle={ (
        <>
          매쉬업에서는 개인의 성장과 팀의 성장을 위해 매 기수마다<br />
          각종 세미나와 팀별 스터디가 활발히 진행된다구요!
        </>
      ) }
    >
      <article className={ S.Container }>
        <ImageGridView
          title='team study'
          images={ TEAM_STUDY }
          dataAos='fade-left'
          dataAosDuration='600'
        />
        <ImageGridView
          title='webinar'
          images={ WEBINAR }
          dataAos='fade-left'
          dataAosDuration='800'
        />
        <ImageGridView
          title='hackathon'
          images={ HACKATHON }
          dataAos='fade-left'
          dataAosDuration='1000'
        />
      </article>
      <article
        className={ S.MobileContainer }
        data-aos='fade-left'
        data-aos-duration='600'
      >
        <Slider { ...sliderOptions }>
          <ImageGridView title='team study' images={ TEAM_STUDY } />
          <ImageGridView title='webinar' images={ WEBINAR } />
          <ImageGridView title='hackathon' images={ HACKATHON } />
        </Slider>
      </article>
    </Section>
  );
}

export default PlaySection;
