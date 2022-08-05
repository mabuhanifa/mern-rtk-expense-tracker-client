import { ArcElement, Chart } from 'chart.js';
import React from "react";
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
const Graph = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  return (
    <div className="flex justify-content max-w-max mx-auto">
      <div className="item">
        <div className="chart relative">
          <h3 className="mb-4 font-bold title">
            Total
            <Doughnut data={data}/>
            <span className="block text-3xl text-emerald-400"></span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4"></div>
      </div>
    </div>
  );
};

export default Graph;
