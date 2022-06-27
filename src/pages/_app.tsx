import React from 'react';
import Head from 'next/head';
import ICON from '@resources/images/icon.png';
import THOMB from '@resources/images/thomb.png';
import { globalStyles, theme } from '@styles/index';
import { css, Global, ThemeProvider } from '@emotion/react';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="a-hPVC09I0wScoLhVLW7E6oqX4KwTc3iK7Ui4unFg6g"
        />
        <title>Mash Up ⎮ IT 개발 동아리</title>
        <meta
          name="description"
          content="매쉬업은 개발, 디자인에 관심과 열정이 있는 사람들이 모인 단체로 Product Design, Android, iOS, Node, Spring, Web 총 6개의 팀으로 구성되어 있습니다. 매쉬업에서는 전체모임의 세미나 및 네트워킹을 진행하고 있으며, 이를 통하여 개인의 전문역량과 협업능력을 증대시키고자 합니다."
        />
        <meta
          name="keywords"
          content="IT동아리,메쉬업,매쉬업,mashup,mash-up,iOS,개발동아리,android,디자인,디자인동아리,web,백엔드,backend,IT,동아리"
        />
        <meta property="og:url" content="https://mash-up.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mash-up | IT 연합 동아리" />
        <meta
          property="og:description"
          content="매쉬업은 개발, 디자인에 관심과 열정이 있는 사람들이 모인 단체로 Product Design, Android, iOS, Node, Spring, Web 총 6개의 팀으로 구성되어 있습니다. 매쉬업에서는 전체모임의 세미나 및 네트워킹을 진행하고 있으며, 이를 통하여 개인의 전문역량과 협업능력을 증대시키고자 합니다."
        />
        <meta property="og:image" content={THOMB} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mash Up ⎮ IT 개발 동아리" />
        <meta
          name="twitter:description"
          content="매쉬업은 개발, 디자인에 관심과 열정이 있는 사람들이 모인 단체로 Product Design, Android, iOS, Node, Spring, Web 총 6개의 팀으로 구성되어 있습니다. 매쉬업에서는 전체모임의 세미나 및 네트워킹을 진행하고 있으며, 이를 통하여 개인의 전문역량과 협업능력을 증대시키고자 합니다."
        />
        <link rel="icon" href={ICON} type="image/png" />
        <link
          data-react-helmet="true"
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
