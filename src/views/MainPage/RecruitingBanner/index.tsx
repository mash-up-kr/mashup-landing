import React from 'react'
import S from './styles.module.scss';
import RECRUIT_ARROW from '@resources/svg/recruit_arrow.svg';

// TODO:(하준) 현재 아무곳에서도 사용하지 않고 있음 13기때 배너를 이용할거라면 리팩토링 후 사용
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

export default RecruitingBanner;
