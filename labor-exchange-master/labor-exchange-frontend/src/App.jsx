import {Route, Routes} from "react-router";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Redirect from "./layouts/Redirect.jsx";
import SignLayout from "./layouts/SignLayout.jsx";
import AboutUs from "./components/common/about/AboutUs.jsx";
import EmployerVacancies from "./components/employer/vacancy/EmployerVacancies.jsx";
import EmployerVacancy from "./components/employer/vacancy/EmployerVacancy.jsx";
import EmployerInfo from "./components/employer/info/EmployerInfo.jsx";
import EmployerJobSeekers from "./components/employer/jobSeekers/EmployerJobSeekers.jsx";
import EmployerJobSeeker from "./components/employer/jobSeekers/EmployerJobSeeker.jsx";
import EmployerFavoriteJobSeekers from "./components/employer/favorites/EmployerFavoriteJobSeekers.jsx";
import Analytic from "./components/employer/analytic/Analytic.jsx";
import Vacancies from "./components/common/vacancy/Vacancies.jsx";
import Vacancy from "./components/common/vacancy/Vacancy.jsx";
import JobSeekerInfo from "./components/jobSeeker/info/JobSeekerInfo.jsx";
import JobSeekerVacancies from "./components/jobSeeker/vacancy/JobSeekerVacancies.jsx";
import JobSeekerVacancy from "./components/jobSeeker/vacancy/JobSeekerVacancy.jsx";
import JobSeekerResponsesVacancies from "./components/jobSeeker/responses/JobSeekerResponsesVacancies.jsx";
import JSAnalytic from "./components/jobSeeker/analytic/JSAnalytic.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/sign" element={<SignLayout />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/employers/:id/vacancies" element={<EmployerVacancies />} />
          <Route path="/employers/:employerID/vacancies/:vacancyID" element={<EmployerVacancy />} />
          <Route path="/employers/:employerID/vacancies/new" element={<EmployerVacancy />} />
          <Route path="/employers/:id/info" element={<EmployerInfo />} />
          <Route path="/employers/:id/job_seekers" element={<EmployerJobSeekers />} />
          <Route path="/employers/:employerID/job_seekers/:jobSeekerID" element={<EmployerJobSeeker />} />
          <Route path="/employers/:id/favorites" element={<EmployerFavoriteJobSeekers />} />
          <Route path="/employers/:id/analytic" element={<Analytic />} />

          <Route path="/job_seekers/:id/info" element={<JobSeekerInfo />} />
          <Route path="/job_seekers/:id/vacancies" element={<JobSeekerVacancies />} />
          <Route path="/job_seekers/:jobSeekerID/vacancies/:vacancyID" element={<JobSeekerVacancy />} />
          <Route path="/job_seekers/:id/responses" element={<JobSeekerResponsesVacancies />} />
          <Route path="/job_seekers/:id/analytic" element={<JSAnalytic />} />

          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<Vacancy />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </>
  )
}

export default App
