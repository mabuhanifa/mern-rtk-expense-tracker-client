import { ArcElement, Chart } from 'chart.js';
import React from "react";
import { Doughnut } from 'react-chartjs-2';
import Labels from './Labels';
Chart.register(ArcElement);
const Graph = () => {
    const config ={
        data:{
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
              hoverOffset: 4,
              borderRadius:30,
              spacing:10,
            }]
          },
          options:{
            cutout:115
          }
    } 
  return (
    <div className="flex justify-content max-w-max mx-auto">
      <div className="item">
        <div className="chart relative">
            <Doughnut {...config}/>
          <h3 className="mb-4 font-bold title">
            <span className="block text-3xl text-emerald-400">
                ${0}
            </span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
            <Labels/>
        </div>
      </div>
    </div>
  );
};

export default Graph;
