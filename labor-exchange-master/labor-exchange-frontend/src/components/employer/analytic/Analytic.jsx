import {useEffect, useState} from "react";
import {GetEmployerAnalyticTable, GetVacancyAnalyticTable} from "../../../api/services/analytic.js";
import ChartComponent from "./ChartComponent.jsx";
import {useParams} from "react-router";

const Analytic = () => {
  const {id} = useParams()
  const [analytic, setAnalytic] = useState([])
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    GetEmployerAnalyticTable().then(res => {
      setAnalytic(res)
    })
    GetVacancyAnalyticTable(parseInt(id)).then(res => {
      setVacancies(res)
      console.log(res)
    })
  }, [])

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="font-bold text-xl">Аналитика по всем существующим работодателям</h1>
      {analytic.length > 0 && <ChartComponent data={analytic}/>}
      <h1 className="font-bold text-xl">Аналитика по всем вашим вакансиям</h1>
      {vacancies.length > 0 && <ChartComponent data={vacancies}/>}
    </div>
  );
};

export default Analytic;