export type Project = any

export const makeWindows = (
  projects: Project[],
  curveFunction: (theta: number) => {
    target: { x: number; y: number }
    size: number
  }
): {
  project: Project
  position: {
    target: { x: number; y: number }
    offset: { x: number; y: number }
  }
  size: number
}[] => {
  const windowArray = projects.map((project, index) => {
    const { target, size } = curveFunction(index + 1 / projects.length)
    const offset = { x: -20, y: 0 }
    return {
      project,
      position: {
        target,
        offset
      },
      size
    }
  })

  return windowArray
}

export const makeCurve = (width: number, height: number) => {
  return (theta: number) => {
    const size = 100
    const padding = size + 40
    const w = width / 2
    const h = height / 2
    const rx = (width - padding) / 2
    const ry = (height - padding) / 2

    return {
      target: {
        x: Math.round(w + rx * Math.cos(theta * 1) - size / 2),
        y: Math.round(h + ry * Math.sin(theta * 1.5) - size / 2)
      },
      size
    }
  }
}
