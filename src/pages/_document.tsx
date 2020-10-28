import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class FEConf2020Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head title="Mash-up | IT 연합 동아리"/>
        <body>
        <div className="container">
          <Main />
        </div>
        <NextScript />
        <div id="modal-root"/>
        </body>
      </Html>
    )
  }
}

export default FEConf2020Document;
