import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {GetEmployer, UpdateEmployer} from "../../../api/services/employer.js";
import {GetJobSeeker, UpdateJobSeeker} from "../../../api/services/jobSeeker.js";

const JobSeekerInfo = () => {
  const {id} = useParams()
  const [jobSeeker, setJobSeeker] = useState({})
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [position, setPosition] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [accountID, setAccountID] = useState(0)

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleContactDetailsChange = (e) => {
    setContactDetails(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const nav = useNavigate()

  useEffect(() => {
    id && GetJobSeeker(id)
      .then(res => {
        setJobSeeker(res)
        setFullName(res.full_name)
        setExperience(res.experience)
        setEducation(res.education)
        setBirthDate(res.birth_date)
        setContactDetails(res.contact_details)
        setPosition(res.position)
        setAccountID(res.account_id)
      })
  }, [])

  const handleUpdate = () => {
    UpdateJobSeeker(id, fullName, birthDate, contactDetails, position, education, experience, accountID).then()
  }

  const data = [
    { text: "Полное имя:", value: fullName, onChange: handleFullNameChange },
    { text: "Дата рождения:", value: birthDate, onChange: handleBirthDateChange },
    { text: "Контактные данные:", value: contactDetails, onChange: handleContactDetailsChange },
    { text: "Должность:", value: position, onChange: handlePositionChange },
    { text: "Образование:", value: education, onChange: handleEducationChange },
    { text: "Опыт работы:", value: experience, onChange: handleExperienceChange },
  ];

  return  (
    <section className="bg-gray-50 h-[100vh] py-3 dark:bg-gray-900">
      {jobSeeker && <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Соискатель
            </h1>
            <div className="space-y-4 md:space-y-6">
              {data.map((item, index) => (
                <div key={index} className="mb-8">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {item.text}
                    <input
                      type="text"
                      value={item.value}
                      onChange={item.onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </label>
                </div>
              ))}
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

export default JobSeekerInfo;