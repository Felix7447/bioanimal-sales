import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CardComponent } from './index'

const props = {
  color: '#f8f8f8',
  title: 'MyCard',
  sales: 100
}

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgb(${r}, ${g}, ${b})`
}

test('Card Component', async () => {
  const {
    color,
    title,
    sales
  } = props

  const component = render(<CardComponent background={color} title={title} sales={sales} />)

  component.getByText(title)
  component.getByText(sales)

  const card = component.container.querySelector('div')

  const convertedColor = hex2rgb(color)

  expect(card?.style.backgroundColor).toEqual(convertedColor)
})