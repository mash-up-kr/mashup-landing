import React from 'react';
import cc from 'classcat';

import S from './styles.module.scss';
import { TalkItem } from '@constants/talk';


interface Props {
  talks: TalkItem[];
};

export const Talk: React.FC<Props> = ({ talks }: Props) => {


  return (
    <ul className={ S.Container }>
      {
        talks.map(({ commentType, comment, side, link }) => (
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
        ))
      }
    </ul>
  );
}
