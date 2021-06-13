import React from 'react';
import cc from 'classcat';

import S from './styles.module.scss';
import { TalkItem } from '@constants/talk';

import IMG_PROFILE from '@resources/svg/profile.svg';
import { collectGaEvent } from '@utils/google';

interface Props {
  animation?: boolean;
  talks: TalkItem[];
};

export const Talk: React.FC<Props> = ({ animation = false, talks }: Props) => {
  const handleLinkClick = (link?: string, comment?: string) => {
    if(!link) {
      return;
    }

    if(comment) {
      collectGaEvent(`Talk_${comment}_클릭`);
    }
    
    window.open(link, '_blank');
  }

  return (
    <ul className={ S.Container }>
      {
        talks.map(({ commentType, comment, profile, side, link }) => {
          const options = animation ? {
            ['data-aos']: side === 'end' ? 'zoom-in-left' : 'zoom-in-right',
            ['data-aos-duration']: '800'
          } : {}

          return (
            side === 'divide' ? (
              <div className={ S.Divide } />
            ) : (
              <li
                key={ comment }
                className={ cc([
                  S.TalkWrap,
                  {
                    [S.EndSide]: side === 'end',
                    [S.EndSideImg]: commentType === 'img',
                  }
                ])}
                { ...options }
              >
                {
                  side === 'start' && (
                    <img
                      className={ cc([
                        S.Profile,
                        {
                          [S.ProfileHide]: !profile,
                        }
                      ]) }
                      src={ IMG_PROFILE }
                      alt='프로필'
                    />
                  )
                }
                <p
                  className={ cc([
                    S.TalkComment,
                    {
                      [S.TalkEndSide]: side === 'end',
                      [S.TalkCommentImg]: commentType === 'img',
                      [S.TalkCommentLink]: commentType === 'link',
                    }
                  ]) }
                  onClick={ () => handleLinkClick(link, comment) }
                  dangerouslySetInnerHTML={{ __html: comment }}
                >
                </p>
              </li>
            )
          )
        })
      }
    </ul>
  );
}
