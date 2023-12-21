import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { LineChartComponent } from "."

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}))

test('Line Chart Component', () => {
  render(<LineChartComponent />)
})