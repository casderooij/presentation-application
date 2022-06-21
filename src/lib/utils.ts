export type Project = any

export type Position = {
  x: number
  y: number
}

export type Viewport = {
  width: number
  height: number
}

export const getWindowSizes = () => {
  if (typeof window === 'undefined') return
  const mobile = window.matchMedia('(max-width: 640px)')
  const tablet = window.matchMedia('(max-width: 1280px)')

  if (mobile.matches) {
    return { min: 100, max: 200 }
  } else if (tablet.matches) {
    return { min: 200, max: 300 }
  } else {
    return { min: 300, max: 100 }
  }
}

export const makeWindows = (
  projects: Project[],
  viewport: Viewport,
  curveFunction: (theta: number) => {
    target: Position
    size: number
  }
): {
  project: Project
  position: {
    target: Position
    origin: Position
  }
  size: number
}[] => {
  const windowArray = projects.map((project, index) => {
    const { target, size } = curveFunction(index + 1 / projects.length)
    const origin = calculateOrigin(viewport, target)
    return {
      project,
      position: {
        target,
        origin
      },
      size
    }
  })

  return windowArray
}

export const makeCurve = ({ width, height }: Viewport, size: number) => {
  return (theta: number) => {
    const padding = size * 1.5
    const w = width / 2
    const h = height / 2
    const rx = (width - padding) / 2
    const ry = (height - padding) / 2

    const x = Math.round(
      w + rx * Math.cos(theta * (Math.random() * 40) - 20) - size / 2
    )
    const y = Math.round(
      h + ry * Math.sin(theta * (Math.random() * 40) - 20) - size / 2
    )

    return {
      target: { x, y },
      size
    }
  }
}

const calculateOrigin = (
  { width, height }: Viewport,
  target: Position
): Position => {
  const vectorToCenter = [width / 2 - target.x, height / 2 - target.y]
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
