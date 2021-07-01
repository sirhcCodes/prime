import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
            rel='stylesheet'
          />
          <title>Chris Wong</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
