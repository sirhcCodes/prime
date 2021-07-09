import 'tailwindcss/tailwind.css';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';

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
