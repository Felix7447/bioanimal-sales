"use client"
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'
import { TimeDropDown } from '../TimeDropDown'
import { alignChartTitle, scaleType, View } from '@/types'
import { dayRange } from '@/utils/dateRanges'

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
)

const alignment: alignChartTitle = "start"
const scaleTypeX: scaleType = "time"
const now = new Date().getTime()

const data = {
  datasets: [
    {
      label: 'Sales',
      data: [
        { x: new Date('2023-10-27T00:00:00'), y: 5 },
        { x: new Date('2023-10-29T00:00:00'), y: 3 },
        { x: new Date('2023-11-02T00:00:00'), y: 4 },
        { x: new Date('2023-11-03T00:00:00'), y: 6 },
        { x: new Date('2023-11-08T00:00:00'), y: 10 },
        { x: new Date('2023-11-09T00:00:00'), y: 6 },
        { x: new Date('2023-11-15T00:00:00'), y: 7 },
      ],
      borderColor: '#8dd4fc',
      borderWidth: 2,
      pointBackgroundColor: '#8dd4fc',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#8dd4fc')
        gradientBg.addColorStop(1, '#8dd4fc00')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Vet',
      data: [
        { x: new Date('2023-10-27T00:00:00'), y: 2 },
        { x: new Date('2023-10-29T00:00:00'), y: 1 },
        { x: new Date('2023-11-02T00:00:00'), y: 2 },
        { x: new Date('2023-11-03T00:00:00'), y: 4 },
        { x: new Date('2023-11-08T00:00:00'), y: 7 },
        { x: new Date('2023-11-09T00:00:00'), y: 2 },
        { x: new Date('2023-11-15T00:00:00'), y: 4 },
      ],
      borderColor: '#e4fc72',
      pointBackgroundColor: '#e4fc72',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#e4fc72')
        gradientBg.addColorStop(1, '#e4fc7200')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Peluquería',
      data: [
        { x: new Date('2023-10-27T00:00:00'), y: 3 },
        { x: new Date('2023-10-29T00:00:00'), y: 2 },
        { x: new Date('2023-11-02T00:00:00'), y: 2 },
        { x: new Date('2023-11-03T00:00:00'), y: 2 },
        { x: new Date('2023-11-08T00:00:00'), y: 3 },
        { x: new Date('2023-11-09T00:00:00'), y: 4 },
        { x: new Date('2023-11-15T00:00:00'), y: 3 },
      ],
      borderColor: '#cbacfc',
      pointBackgroundColor: '#cbacfc',
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return
        }

        const { ctx, chartArea: { top, bottom } } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)

        gradientBg.addColorStop(0, '#cbacfc')
        gradientBg.addColorStop(1, '#cbacfc00')

        return gradientBg
      },
      pointRadius: 5,
      tension: 0.3,
      fill: true
    }
  ],
}

export const ChartComponent = () => {
  const [view, setView] = useState<View>({ time: "day", range: dayRange })

  const { time, range } = view

  const options = {
    responsive: true,
    scales: {
      x: {
        type: scaleTypeX,
        time: {
          unit: time
        },
        min: range,
        max: now,
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
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
        align: alignment,
        font: {
          size: 20,
          weight: 'bold'
        }
      }
    },
  }

  const handleDropDown = (view: View) => {
    setView(view)
  }

  return (
    <section className="relative">
      <section className="absolute top-0 right-0 px-8">
        <TimeDropDown changeTime={handleDropDown} />
      </section>
      <Line options={options} data={data} className="w-3/4 my-2 px-2" />
    </section>
  )
}

