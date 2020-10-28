import React from 'react';
import Head from "next/head";
import '@styles/main.scss';

function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Mash-up | IT 연합 동아리</title>
        <meta
          name="description"
          content="mash-up은 디자이너 개발자, 학생 직장인이 모여 함께 서비스를 만들고 학습하는 IT 동아리 입니다."
        />
        <meta
          name="keywords"
          content="IT동아리,메쉬업,매쉬업,mashup,mash-up,iOS,개발동아리,android,디자인,디자인동아리,web,백엔드,backend,IT,동아리"
        />
        <meta property="og:url" content="https://mash-up.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mash-up | IT 연합 동아리" />
        <meta
          property="og:description"
          content="mash-up은 디자이너 개발자, 학생 직장인이 모여 함께 서비스를 만들고 학습하는 IT 동아리 입니다."
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mash-up | IT 연합 동아리" />
        <meta
          name="twitter:description"
          content="mash-up은 디자이너 개발자, 학생 직장인이 모여 함께 서비스를 만들고 학습하는 IT 동아리 입니다."
        />
        <link data-react-helmet="true" rel="stylesheet" href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css" />
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css" rel="stylesheet" type="text/css" />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}

export default App;
