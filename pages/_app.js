import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
