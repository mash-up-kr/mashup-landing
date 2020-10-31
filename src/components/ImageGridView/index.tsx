import cc from 'classcat';

import S from './styles.module.scss';

interface Props {
  title: string;
  images: string[];
}

export const ImageGridView = ({ title, images }: Props) => {
  const imageLength = images.length - 1;
  const imageViewStyle = [ S.OneImage, S.TwoImages, S.ThreeImages, S.FourImages ];

  return (
    <div className={ S.Container }>
      <h2 className={ S.Title }>{ title }</h2>
      <div className={ cc([ S.ContentsWrap, imageViewStyle[imageLength] ]) }>
        {
          images.map((img, index) => (
            <img
              key={ `${title}-${index}` }
              src={ img }
              alt={ `${title} ${index}` }
              className={ S.Image }
              width={ 500 }
              height={ 500 }
            />
          ))
        }
      </div>
    </div>
  );
}
