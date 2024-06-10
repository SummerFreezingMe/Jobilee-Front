import React from 'react';
import { Link } from 'react-router-dom';

const VacancyCard = ({ vacancy }) => {
  return (
    <div className="mx-auto mb-6 w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{vacancy.title}</h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400"> {vacancy.description} </p>
      <Link
        to={`/vacancies/${vacancy.id}`}
        className="mt-3 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
      >
        Подробнее
        <svg
          className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
      </Link>
    </div>
  );
};

export default VacancyCard;