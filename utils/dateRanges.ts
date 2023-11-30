const date = new Date()

export const dayRange = date.setDate(date.getDate() - 7 * 2)
export const weekRange = date.setDate(date.getDate() - 7 * 4)
export const monthRange = date.setDate(date.getDate() - 7 * 12)

export const dateRange = {
  "day": dayRange,
  "week": weekRange,
  "month": monthRange
}