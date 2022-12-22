import React from 'react';
import S from './styles.module.scss';

const RecruitingBanner: React.FC = () => {
  const recruitStartDate = new Date('2023-01-11T00:00:00+09:00');
  const nowDate = new Date();

  const diffMs = recruitStartDate.valueOf() - nowDate.valueOf();
  const remainingRecruitDate = Math.ceil(diffMs / 1000 / 60 / 60 / 24);

  return (
    <a href="https://recruit.mash-up.kr" target="_blank" rel="noreferrer">
      <div className={S.Container}>
        <span className={S.Message}>
          <span className={S.Season}>Mash-Up 13기 리쿠르팅 </span>Coming Soon
        </span>
        <span className={S.DDay}>D-{remainingRecruitDate}</span>
      </div>
    </a>
  );
};

export default RecruitingBanner;
