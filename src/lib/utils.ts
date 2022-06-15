export const createCurve = (width: number, height: number) => {
  return (theta: number) => {
    const padding = 140
    const w = width / 2
    const h = height / 2
    const rx = (width - padding) / 2
    const ry = (height - padding) / 2

    return [
      +(w + rx * Math.cos(theta * 1)).toFixed(1),
      +(h + ry * Math.sin(theta * 0.4)).toFixed(1)
    ]
  }
}

export const lerp = (v1: number, v2: number, t: number) => {
  return v1 * (1 - t) + v2 * t
}

export const lerpValues = (v1: number[], v2: number[], t: number) => {
  const len = Math.min(v1.length, v2.length)
  const out = new Array(len)
  for (let i = 0; i < len; i++) {
    out[i] = lerp(v1[i], v2[i], t)
  }
  return out
}
