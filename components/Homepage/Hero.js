import React from 'react';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Accounting Services
            <br className="hidden lg:inline-block" />
            with a personal approach.
          </h1>
          <p className="mb-8 leading-relaxed">
            We are a SAICA accredited firm that offers accounting, bookkeeping,
            taxation, payrol and advisory services. Our services are taloire
            made for medium sized businesses, individuals and the non profit
            sector. We also offer services to the public sector.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => router.push('/quote')}
              className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 font-semibold focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Request Quote
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="ml-4 inline-flex text-gray-700 font-semibold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/accounting.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
