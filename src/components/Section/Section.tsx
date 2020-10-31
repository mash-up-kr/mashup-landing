import React from 'react';
import cc from 'classcat';
import S from './Section.module.scss';
import { motion } from 'framer-motion';

interface Props {
  sectionId: string;
  title?: string;
  subTitle?: string | React.ReactNode;
  children: React.ReactNode;
  hasPadding?: boolean;
}

const Section: React.FC<Props> = ({
  sectionId,
  title = '',
  subTitle = '',
  hasPadding = true,
  children,
}: Props) => (
  <motion.section
    id={ sectionId }
    className={ hasPadding ? S.Container : S.ContainerWithoutPadding }
  >
    {
      title && (
        <div className={ cc([S.HeaderSection, { [S.AddPadding]: !hasPadding }])  }>
          <div className={ S.TopShadow } />
          <h2 className={ S.Title }> { title } </h2>
          <p className={ S.SubTitle }> { subTitle } </p>
          <div className={ S.Shadow } />
        </div>
      )
    }
    { children }
  </motion.section>
);

export default Section;
