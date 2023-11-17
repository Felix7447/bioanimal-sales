export type alignChartTitle = "start" | "center" | "end" | undefined
export type scaleType = timeseries

export interface View {
  time: "day" | "week" | "month"
  range: number
}