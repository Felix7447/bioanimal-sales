import { render, fireEvent, RenderResult, prettyDOM } from "@testing-library/react"
import "@testing-library/jest-dom"
import { TimeDropDown } from "."

const handleDropDown = jest.fn()

describe('TimeDropDown', () => {
  let dropDown: RenderResult

  beforeEach(() => {
    dropDown = render(<TimeDropDown changeTime={handleDropDown} />)
  })

  test('button', () => {
    const button = dropDown.getByText("Día")
    fireEvent.click(button)

    const weekButton = dropDown.getByText("Semana")
    const monthButton = dropDown.getByText("Mes")
  })
})