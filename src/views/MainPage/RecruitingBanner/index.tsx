import React from 'react'
import S from './styles.module.scss';
import RECRUIT_ARROW from '@resources/svg/recruit_arrow.svg';

const RecruitingBanner:React.FC = () => {
  return (
    <div className={S.Container}>
      <span className={S.Message}>
        <span className={S.Season}>Mash-Up 12기</span> 리쿠르팅 OPEN
      </span>
      <a className={S.ApplyLink} href='https://recruit.mash-up.kr' target="_blank" rel="noreferrer">
        지원하러 가기
        <img src={RECRUIT_ARROW} alt="" />
      </a>
    </div>
  )
}

export default RecruitingBanner
