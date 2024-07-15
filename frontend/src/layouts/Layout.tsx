// Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
   
      <Header />
      <main>
        {children || <Outlet />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
