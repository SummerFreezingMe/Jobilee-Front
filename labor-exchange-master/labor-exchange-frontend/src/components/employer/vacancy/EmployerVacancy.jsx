import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {CreateVacancy, DeleteVacancy, GetVacancy, UpdateVacancy} from "../../../api/services/vacancies.js";

const EmployerVacancy = () => {
  const {employerID, vacancyID} = useParams()
  const [vacancy, setVacancy] = useState({})
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const nav = useNavigate()

  useEffect(() => {
    vacancyID && GetVacancy(vacancyID)
      .then(res => {
        setVacancy(res)
        setTitle(res.title)
        setSalary(res.salary)
        setDescription(res.description)
      })
  }, [])

  const handleUpdate = () => {
    UpdateVacancy(vacancyID, title, salary, description, employerID).then(() => {
      nav(`/employers/${employerID}/vacancies`)
    })
  }

  const handleCreate = () => {
    CreateVacancy(title, salary, description, employerID).then(() => {
      nav(`/employers/${employerID}/vacancies`)
    })
  }

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
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Описание:
                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Зарплата:
                  <input
                    type="text"
                    value={salary}
                    onChange={handleSalaryChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>
            </div>

            <div>
              <Link to={`/employer/${employerID}/vacancies`}
                    className="mt-3 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Назад
              </Link>
              <div className="relative mt-3">
                <button
                  onClick={vacancyID ? handleUpdate : handleCreate}
                  className="absolute bottom-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {vacancyID ? "Сохранить" : "Создать"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default EmployerVacancy;