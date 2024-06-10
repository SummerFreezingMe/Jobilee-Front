import React from 'react';
import { Link } from 'react-router-dom';

const EmployerFavoriteJobSeekerCard = ({ id, jobSeeker, favorites, onDelete }) => {
  return (
    <div className="mx-auto mb-6 w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative mt-3">
        <button
          onClick={() => onDelete(jobSeeker.favoriteId)}
          className="absolute top-0 right-0 text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img className="w-6" src="/like.svg" alt="like" />
        </button>
      </div>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{jobSeeker.full_name}</h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400"> {jobSeeker.experience} </p>
      <Link
        to={`/employers/${id}/job_seekers/${jobSeeker.id}`}
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

export default EmployerFavoriteJobSeekerCard;