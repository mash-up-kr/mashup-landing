import React from 'react';
import S from './Section.module.scss';

interface Props {
  title?: string;
  subTitle?: string | React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({
  title = '',
  subTitle = '',
  children,
}: Props) => (
  <section className={ S.Container }>
    {
      title && (
        <div className={ S.HeaderSection }>
          <h2 className={ S.Title }> { title } </h2>
          <p className={ S.SubTitle }> { subTitle } </p>
        </div>
      )
    }
    { children }
  </section>
);

export default Section;
