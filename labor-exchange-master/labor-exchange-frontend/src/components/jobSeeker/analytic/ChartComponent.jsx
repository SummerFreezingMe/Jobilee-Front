import {Bar, BarChart, Cell, Legend, Pie, PieChart, Tooltip} from "recharts";
import React from "react";

const ChartComponent = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <BarChart width={400} height={300} data={data}>
        <Bar dataKey="count" fill="#60a5fa" />
        <Tooltip />
        <Legend />
      </BarChart>

      <PieChart width={400} height={300}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={150}
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#60a5fa" />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartComponent;

