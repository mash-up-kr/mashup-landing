import React from 'react';
import RECRUIT_ARROW from '@resources/svg/recruit_arrow.svg';
import S from './styles.module.scss';

const RecruitingBanner: React.FC = () => {
  const recruitStartDate = new Date('2022-12-28T01:00:00+09:00');
  const nowDate = new Date();

  const diffMs = recruitStartDate.valueOf() - nowDate.valueOf();
  const remainingRecruitDate = Math.ceil(diffMs / 1000 / 60 / 60 / 24);

  const isRecruitingOpen = remainingRecruitDate <= 0;

  return isRecruitingOpen ? (
    <div className={S.RecruitOpen}>
      <span className={S.Message}>
        <span className={S.Season}>Mash-Up 12기</span> 리쿠르팅 OPEN
      </span>
      <a className={S.ApplyLink} href="https://recruit.mash-up.kr" target="_blank" rel="noreferrer">
        지원하러 가기
        <img src={RECRUIT_ARROW} alt="" />
      </a>
    </div>
  ) : (
    <a href="https://recruit.mash-up.kr" target="_blank" rel="noreferrer">
      <div className={S.Remaining}>
        <span className={S.Message}>
          <span className={S.Season}>Mash-Up 13기 리쿠르팅 </span>Coming Soon
        </span>
        <span className={S.DDay}>D-{remainingRecruitDate}</span>
      </div>
    </a>
  );
};

export default RecruitingBanner;
