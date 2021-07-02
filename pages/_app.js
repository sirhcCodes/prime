import 'tailwindcss/tailwind.css';
import Layout from './components/Layout';
import Header from './components/Header';

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
