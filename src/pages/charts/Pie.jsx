import React from 'react';

import { pieChartData } from '../../data/dummy';
import ChartsHeader from '../../components/ChartsHeader';
import PieChart from '../../components/charts/Pie'

const Pie = () => (
  <div className="m-0 p-0 bg-white rounded-3xl">
    {/* <ChartsHeader category="Pie" title="Project Cost Breakdown" /> */}
    {/* <h1 className='text-xl font-bold pl-[5.5rem]'>Users</h1> */}
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
