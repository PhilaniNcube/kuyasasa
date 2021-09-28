import React from 'react';

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 sm:mx-auto">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
          Services
        </h2>
      </div>
      <div className="grid gap-12 row-gap-8 my-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Annual Financial Statements
            </h6>
            <p className="text-sm text-gray-900">
              Most financiers require a set of financial statements before
              deciding to avail funds, the same reports are required for SARS
              submissions or by shareholders. Whether your requirements are for
              a compilation report, an independent review, an audit, or an
              interim report. We can surely assist.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Monthly bookkeeping and taxation services
            </h6>
            <p className="text-sm text-gray-900">
              Medium sized businesses are not always to afford services of an
              experienced inhouse accountant. Our month-on-month services will
              take the stress of an inhouse accountant away – at a fraction of
              cost.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Taxation</h6>
            <p className="text-sm text-gray-900">
              From VAT submissions to income tax and provisional tax submissions
              and payments we handle it all. We maintain your SARS compliance
              profile to ensure you are never caught off-guard.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-12 row-gap-8 my-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Payroll</h6>
            <p className="text-sm text-gray-900">
              We take the stress of complying with the payroll requirements away
              from you. From a single employee to as many we prepare
              calculations, issue payslips, submit to SARS and department of
              labour. We prepare IRP5’s on time and assist in claiming any
              allowances available to you.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Secretarial</h6>
            <p className="text-sm text-gray-900">
              Part of maintain a complying company is ensuring that all CIPC
              returns are submitted. From company registrations, change of
              directors, submission of annual returns we do it all.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Training</h6>
            <p className="text-sm text-gray-900">
              We offer specialised and customised accounting and tax training
              for your staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
