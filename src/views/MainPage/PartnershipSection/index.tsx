import React from 'react';
import Section from '@components/Section/Section';
import S from './styles.module.scss'
import naverCloud from '@resources/images/naver_cloud.png'

interface Props {}

const PartnershipSection: React.FC<Props> = () => (
  <Section
    sectionId='partnership'
    title='매시업과 함께 하는 기업'
    subTitle='매시업과 함께하는 파트너 후원사를 소개합니다.'
  >
    <div className={S.sponsorContainer}>
      <img src={naverCloud}
           alt='Naver Cloud Platform'
           className={S.sponsorLogo}
           data-aos='fade-up'
           data-aos-duration='600'
      />
    </div>
  </Section>
);

export default PartnershipSection;
