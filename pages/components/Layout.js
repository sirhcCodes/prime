import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-full'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
