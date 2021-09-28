import React, { Fragment } from 'react';
import Services from '../components/ServicesPage/Services';
import ServicesHero from '../components/ServicesPage/ServicesHero';
import { Testimonials } from '../components/ServicesPage/Testimonials';

const services = () => {
  return (
    <Fragment>
      <ServicesHero />
      <Services />
      <Testimonials />
    </Fragment>
  );
};

export default services;
