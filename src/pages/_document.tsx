import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MashUpDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head title="Mash-up | IT 연합 동아리">
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
          />
          <link
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            rel="stylesheet"
          />
          <link
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}

export default MashUpDocument;
