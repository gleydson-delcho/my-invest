import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico"/>
        </Head>
            <body>
              <Main />
              <NextScript />
            </body>
      </Html>
    );
  }
};