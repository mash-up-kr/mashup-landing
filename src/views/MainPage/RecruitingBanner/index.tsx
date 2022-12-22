import React from 'react';
import S from './styles.module.scss';

const RecruitingBanner: React.FC = () => {
  return (
    <div className={S.Container}>
      <span className={S.Message}>
        <span className={S.Season}>Mash-Up 13기</span> 리쿠르팅 Coming Soon
      </span>
      <a className={S.ApplyLink} href="https://recruit.mash-up.kr" target="_blank" rel="noreferrer">
        D-12
      </a>
    </div>
  );
};

export default RecruitingBanner;
