"use client"
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Align
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      min: 0,
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Analytics',
      align: "start",
      padding: 20,
      font: {
        size: 20,
        weight: 'bold'
      }
    }
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [20, 35, 44, 59, 48, 50, 30, 20, 25, 30, 31, 40],
      borderColor: '#ddf2fe',
      borderWidth: 2,
      pointBackgroundColor: '#ddf2fe',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#ddf2fe')
        gradientBg.addColorStop(1, '#ddf2fe00')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Vet',
      data: [10, 10, 24, 30, 20, 30, 15, 20, 10, 20, 35, 20],
      borderColor: '#eefea2',
      pointBackgroundColor: '#eefea2',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#eefea2')
        gradientBg.addColorStop(1, '#eefea200')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Peluquería',
      data: [10, 15, 20, 29, 28, 10, 10, 24, 30, 20, 30, 35, 40],
      borderColor: '#e9ddfc',
      pointBackgroundColor: '#e9ddfc',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#e9ddfc')
        gradientBg.addColorStop(1, '#e9ddfc00')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    }
  ],
}

export const ChartComponent = () => {
  return <Line options={options} data={data} className="w-3/4 my-14 px-2" />
}

