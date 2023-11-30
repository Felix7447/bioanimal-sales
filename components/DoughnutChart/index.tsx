"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Veterinaria', 'Peluquería'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#8dd4fc',
        '#cbacfc'
      ],
      bordercolor: [
        '#383b3b'
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 25
      }
    }
  }
}

export const DoughnutChart = () => {
  return <Doughnut data={data} options={options} className="my-8 hover:cursor-pointer" />
}
