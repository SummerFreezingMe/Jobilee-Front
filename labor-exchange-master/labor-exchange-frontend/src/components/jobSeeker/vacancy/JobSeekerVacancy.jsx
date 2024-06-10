import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {CreateVacancy, DeleteVacancy, GetVacancy, UpdateVacancy} from "../../../api/services/vacancies.js";

const JobSeekerVacancy = () => {
  const {jobSeekerID, vacancyID} = useParams()
  const [vacancy, setVacancy] = useState({})

  const nav = useNavigate()

  useEffect(() => {
    vacancyID && GetVacancy(vacancyID)
      .then(res => {
        setVacancy(res)
      })
  }, [])

  return  (
    <section className="bg-gray-50 h-[100vh] py-3 dark:bg-gray-900">
      {vacancy && <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Вакансия
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Вакансия:
                  <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {vacancy.title}
                  </p>
                </label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Описание:
                  <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {vacancy.description}
                  </p>
                </label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Зарплата:
                  <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {vacancy.salary}
                  </p>
                </label>
              </div>
            </div>

            <div>
              <Link to={`/job_seekers/${jobSeekerID}/vacancies`}
                    className="mt-3 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Назад
              </Link>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default JobSeekerVacancy;