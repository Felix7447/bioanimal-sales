import { RenderResult, fireEvent, prettyDOM, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ModalButton } from "."

const props = {
  title: 'ModalButton'
}

describe('Modal Button', () => {
  const { title } = props
  let modalButton: RenderResult

  beforeEach(() => {
    modalButton = render(<ModalButton title={title} />)
  })

  test('Click button', () => {
    const button = modalButton.getByText(title)
    fireEvent.click(button)
    screen.getByText('Completa el formulario')
    screen.getByText('Nombre y Apellido')
    screen.getByText('Mascota')
    screen.getByText('Nro de celular')
    screen.getByText('Dirección')
  })

  test('Cancel button', () => {
    const button = modalButton.getByText(title)
    fireEvent.click(button)

    const cancelButton = screen.getByText('Cancelar')
    fireEvent.click(cancelButton)
  })
})