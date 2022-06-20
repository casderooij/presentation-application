export type Project = any

export const makeWindows = (
  projects: Project[],
  curveFunction: (theta: number) => {
    target: { x: number; y: number }
    offset: { x: number; y: number }
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
    const { target, offset, size } = curveFunction(index + 1 / projects.length)
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
    const padding = size * 2
    const w = width / 2
    const h = height / 2
    const rx = (width - padding) / 2
    const ry = (height - padding) / 2

    const x = Math.round(w + rx * Math.cos(theta * 1.1) - size / 2)
    const y = Math.round(h + ry * Math.sin(theta * 1.2) - size / 2)

    const offset = getOffset(w, h, x, y)

    return {
      target: { x, y },
      offset,
      size
    }
  }
}

const getOffset = (
  centerX: number,
  centerY: number,
  x: number,
  y: number
): { x: number; y: number } => {
  const vectorToCenter = [centerX - x, centerY - y]
  const magnitude = Math.sqrt(vectorToCenter[0] ** 2 + vectorToCenter[1] ** 2)
  const normalizedVectorToCenter = [
    vectorToCenter[0] / magnitude,
    vectorToCenter[1] / magnitude
  ]
  const oppositeVector = [
    -normalizedVectorToCenter[0] * 40,
    -normalizedVectorToCenter[1] * 40
  ]

  return {
    x: oppositeVector[0],
    y: oppositeVector[1]
  }
}
