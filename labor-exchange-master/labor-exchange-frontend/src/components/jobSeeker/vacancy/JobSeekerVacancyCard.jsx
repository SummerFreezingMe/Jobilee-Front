import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from "react-router";

const JobSeekerVacancyCard = ({ vacancy, handleResponse }) => {
  const {id} = useParams()
  return (
    <div className="mx-auto mb-6 w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{vacancy.title}</h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400"> {vacancy.description} </p>
      <div className="flex justify-between">
        <Link
          to={`/job_seekers/${id}/vacancies/${vacancy.id}`}
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
        <div>
          <button
            onClick={handleResponse}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Откликнуться
          </button>
        </div>
      </div>

    </div>
  );
};

export default JobSeekerVacancyCard;