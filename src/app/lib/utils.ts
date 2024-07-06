import { Revenue } from "./definitions"

export const generateYAxis = (revenue: Revenue[]) => {
    const yLabelsAxis = []
    const highestRecord = Math.max(...revenue.map((r) => r.revenue))
    const topLabel = Math.ceil(highestRecord / 1000) * 1000
    for(let i = topLabel; i >= 0; i -= 1000) {
        yLabelsAxis.push(`$${i / 1000}K`)
    }
    return { yLabelsAxis, topLabel }
}