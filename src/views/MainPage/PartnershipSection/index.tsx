import React from 'react';
import Section from '@components/Section/Section';
import S from './styles.module.scss';
import naverCloud from '@resources/svg/naver_cloud.svg';
import hyperConnect from '@resources/images/hyper_connect.png';
import opgg from '@resources/images/opgg.png';
import wanted from '@resources/images/wanted.png';
import toss from '@resources/images/toss.png';

interface Props {}

interface Parter {
  name: string;
  image: string;
  url: string;
}

const PartnershipSection: React.FC<Props> = () => {
  const partners: Parter[] = [
    { name: 'naver cloud', image: naverCloud, url: 'https://www.ncloud.com' },
    { name: 'opgg', image: opgg, url: 'https://www.op.gg' },
    { name: 'hyper connect', image: hyperConnect, url: 'https://hyperconnect.com/ko' },
    { name: 'wanted', image: wanted, url: 'https://www.wanted.co.kr' },
    { name: 'toss', image: toss, url: 'https://toss.im' },
  ];
  return (
    <Section
      sectionId="partnership"
      title="매시업과 함께 하는 기업"
      subTitle="매시업과 함께하는 파트너 후원사를 소개합니다."
    >
      <div className={S.partnershipContainer}>
        {partners.map(({ name, image, url }, index) => {
          return (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={S.partnerLink}
              key={`partner-${name}-${index}`}
            >
              <img
                src={image}
                alt={name}
                className={S.partnerLogo}
                data-aos="fade-up"
                data-aos-duration="600"
              />
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default PartnershipSection;
