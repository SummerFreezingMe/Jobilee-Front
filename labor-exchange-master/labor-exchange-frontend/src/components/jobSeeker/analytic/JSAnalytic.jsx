import {useEffect, useState} from "react";
import {
  GetEmployerAnalyticTable,
  GetJobSeekerAnalyticTable,
  GetVacancyAnalyticTable
} from "../../../api/services/analytic.js";
import ChartComponent from "./ChartComponent.jsx";
import {useParams} from "react-router";

const JSAnalytic = () => {
  const {id} = useParams()
  const [analytic, setAnalytic] = useState([])

  useEffect(() => {
    GetJobSeekerAnalyticTable().then(res => {
      setAnalytic(res)
    })
  }, [])

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="font-bold text-xl">Аналитика по всем существующим соискателям</h1>
      {analytic.length > 0 && <ChartComponent data={analytic}/>}
    </div>
  );
};

export default JSAnalytic;