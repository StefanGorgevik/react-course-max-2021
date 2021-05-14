import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((d) => d.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((d, i) => (
        <ChartBar
          key={i}
          value={d.value}
          maxValue={totalMax}
          label={d.label}
        />
      ))}
    </div>
  );
};

export default Chart;
