import { Fragment } from 'react';
import Navbar from '../components/Layout/Navbar';
import '../style/global.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}
