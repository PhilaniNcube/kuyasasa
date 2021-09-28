import { Fragment } from 'react';
import Features from '../components/Homepage/Features';
import Hero from '../components/Homepage/Hero';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}
