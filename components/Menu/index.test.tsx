import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { MenuComponent } from "."

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}))

describe('Menu tests', () => {
  test('render Menu', () => {
    render(<MenuComponent />)
  })
})