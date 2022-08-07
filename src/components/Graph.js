import { ArcElement, Chart } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart_Data, getTotal } from "../helper/helper";
import apiSlice from "../store/apiSlice";
import Labels from "./Labels";
Chart.register(ArcElement);
const Graph = () => {
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }
  return (
    <div className="flex justify-content max-w-max mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className='mb-4 font-bold title'>Total
                    <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
                </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
