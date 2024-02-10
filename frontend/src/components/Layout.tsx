import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="container mx-auto flex-1 bg-maple-dark py-3">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
export default Layout;
