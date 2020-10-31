import React from 'react';
import cc from 'classcat';
import S from './Section.module.scss';

interface Props {
  title?: string;
  subTitle?: string | React.ReactNode;
  children: React.ReactNode;
  hasPadding?: boolean;
}

const Section: React.FC<Props> = ({
  title = '',
  subTitle = '',
  hasPadding = true,
  children,
}: Props) => (
  <section className={ hasPadding ? S.Container : S.ContainerWithoutPadding }>
    {
      title && (
        <div className={ cc([S.HeaderSection, { [S.AddPadding]: !hasPadding }])  }>
          <h2 className={ S.Title }> { title } </h2>
          <p className={ S.SubTitle }> { subTitle } </p>
        </div>
      )
    }
    { children }
  </section>
);

export default Section;
