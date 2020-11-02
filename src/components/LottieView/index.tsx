import Lottie from 'lottie-web';
import { useEffect } from 'react';

interface Props {
  classStyle?: string;
  animationData: any;
  lottieId: string;
  loop?: boolean;
  autoplay? :boolean;
}

export const LottieView = ({
  classStyle = '',
  animationData,
  lottieId,
  loop = false,
  autoplay = true,
}: Props) => {
  useEffect(() => {
    const component = document.getElementById(lottieId);

    const currentLottie = Lottie.loadAnimation({
      wrapper: component,
      animType: 'svg',
      loop,
      autoplay,
      animationData,
    });

    currentLottie.play();
  }, []);

  return (
    <div id={ lottieId } className={ classStyle } />
  )
}
