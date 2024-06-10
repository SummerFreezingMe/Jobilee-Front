import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {CreateVacancy, DeleteVacancy, GetVacancy, UpdateVacancy} from "../../../api/services/vacancies.js";
import {GetEmployer, UpdateEmployer} from "../../../api/services/employer.js";

const EmployerInfo = () => {
  const {id} = useParams()
  const [employer, setEmployer] = useState({})
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [accountID, setAccountID] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const nav = useNavigate()

  useEffect(() => {
    id && GetEmployer(id)
      .then(res => {
        setEmployer(res)
        setName(res.name)
        setAccountID(res.account_id)
        setSpecialty(res.specialty)
      })
  }, [])

  const handleUpdate = () => {
    UpdateEmployer(id, name, specialty, accountID).then()
  }

  return  (
    <section className="bg-gray-50 h-[100vh] py-3 dark:bg-gray-900">
      {employer && <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Работодатель
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Название компании:
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Направление работы:
                  <textarea
                    value={specialty}
                    onChange={handleSpecialtyChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <button
                onClick={handleUpdate}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default EmployerInfo;