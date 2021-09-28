import { Fragment } from 'react';
import { Footer } from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import '../style/global.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
