import React from 'react';
import Section from '@components/Section/Section';
import S from './styles.module.scss'
import NaverCloud from '@resources/svg/naver_cloud.svg'

interface Props {}

const PartnershipSection: React.FC<Props> = () => (
  <Section
    sectionId='partnership'
    title='매시업과 함께 하는 기업'
    subTitle='매시업과 함께하는 파트너 후원사를 소개합니다.'
  >
    <div className={S.sponsorContainer}>
      <img src={NaverCloud} alt='Naver Cloud Platform' className={S.sponsorLogo}/>
    </div>
  </Section>
);

export default PartnershipSection;
