import 'tailwindcss/tailwind.css';
import Layout from './components/Layout';
import Head from 'next/head';
import "../styles.css"

function MyApp({ Component, pageProps }) {
  const pageTitle = `Chris Wong's Personal page`;
  const description =
    'Self-taught Frontend Web Developer. Currently focused on Next.js and TailwindCSS.';
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>Chris Wong</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
