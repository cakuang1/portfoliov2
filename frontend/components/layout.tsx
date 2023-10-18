
import React,{ReactNode} from 'react';
import Header from './header'; 
import Footer from './footer'; 
import Head from 'next/head';
interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div>
        <Head>
        <title>Cary Kuang</title>
      </Head>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;