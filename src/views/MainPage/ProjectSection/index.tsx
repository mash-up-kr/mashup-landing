import React from 'react';
import Section from '@components/Section/Section';
import S from './styles.module.scss';

import IC_FOLDER from '@resources/svg/icon_folder.svg';
import IC_GITHUB from '@resources/svg/icon_github.svg';
import Link from 'next/link';
import { ImageGridView } from '@components/ImageGridView';

interface Props {};

const PROJECT_LIST = [
  {
    label: 'behance',
    img: IC_FOLDER,
    link: 'https://www.behance.net/Mash-Up',
  }, {
    label: 'github',
    img: IC_GITHUB,
    link: 'https://github.com/mash-up-kr',
  }
]

const ProjectSection: React.FC<Props> = () => (
  <Section
    sectionId='works'
    title='우리가 만든 것들 한 번 볼래?'
    hasPadding={ false }
    subTitle={ (
      <>
        { '함께 머리를 맞대어 어려운 난관에도 절대 물러서는 법이 없지!' }
        <br className={ S.IsMobile } />
        { ' 매 기수마다 팀을 구성하고, 협업을 통해 프로젝트를 배포해요.' }
      </>
    ) }
  >
    <div className={ S.Container }>
      {
        PROJECT_LIST.map(({ label, img, link }, index) => (
          <li
            className={ S.ItemContainer }
            data-aos='fade-left'
            data-aos-duration={`${(index + 1) * 4}00`}
          >
            <Link href={ link } key={ label }>
              <a className={ S.ItemWrap } target='_blank' rel='noreferrer'>
                <div className={ S.ItemIcon }>
                  <img  src={ img } alt={ label } />
                </div>
                <p className={ S.Label }> { label } </p>
              </a>
            </Link>
          </li>
        ))
      }
    </div>
  </Section>
);

export default ProjectSection;
