import React from 'react';
import cc from 'classcat';

import S from './styles.module.scss';
import { TalkItem } from '@constants/talk';


interface Props {
  animation?: boolean;
  talks: TalkItem[];
};

export const Talk: React.FC<Props> = ({ animation = false, talks }: Props) => {

  return (
    <ul className={ S.Container }>
      {
        talks.map(({ commentType, comment, side, link }) => {
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
                <p
                  className={ cc([
                    S.TalkComment,
                    {
                      [S.TalkEndSide]: side === 'end',
                      [S.TalkCommentImg]: commentType === 'img',
                      [S.TalkCommentLink]: commentType === 'link',
                    }
                  ]) }
                  onClick={ () => { link && window.open(link, '_blank') } }
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
