import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DoughnutChart } from './index'

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}))

test('Render DoughnutChart', () => {
  render(<DoughnutChart />)
})


