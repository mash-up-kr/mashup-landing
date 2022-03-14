import S from './styles.module.scss';

import IMG_LOGO from '@resources/images/full_logo.png';
import IC_FB from '@resources/svg/ic_face.svg';
import IC_TB from '@resources/svg/ic_tblog.svg';
import IC_MAIL from '@resources/svg/ic_mail.svg';
import IC_INSTA from '@resources/svg/ic_insta.svg';
import IC_BE from '@resources/svg/ic_be.svg';

const FOOTER_ITEMS = [
  {
    name: '메일 문의',
    url: 'mailto:recruit.mashup@gmail.com',
    icon: IC_MAIL,
  },
  {
    name: '매쉬업 블로그',
    url: 'https://mash-up.tistory.com/',
    icon: IC_TB,
  },
  {
    name: '매쉬업 비핸스',
    url: 'https://www.behance.net/Mash-Up',
    icon: IC_BE,
  },
  {
    name: '매쉬업 페이스북 페이지',
    url: 'https://www.facebook.com/mashupgroup/',
    icon: IC_FB,
  },
  {
    name: '매쉬업 인스타그램',
    url: 'https://www.instagram.com/official_mashup_/',
    icon: IC_INSTA,
  },
];

const Footer = () => (
  <footer className={S.Container}>
    <img src={IMG_LOGO} alt="매쉬업 로고" className={S.Logo} />
    <div className={S.IconWrap}>
      {FOOTER_ITEMS.map(({ name, url, icon }) => (
        <a href={url} key={name} target="_blank" rel="noreferrer">
          <img src={icon} alt={name} />
        </a>
      ))}
    </div>
    <p className={S.Description}>© Mash-Up. 2022 All rights reserved</p>
  </footer>
);

export default Footer;
