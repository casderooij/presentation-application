import type { Viewport, Position } from '$lib/types'

export const getFrameSize = () => {
  if (typeof window === 'undefined') return 0
  const mobile = window.matchMedia('(max-width: 640px)')
  const tablet = window.matchMedia('(max-width: 1280px)')

  if (mobile.matches) {
    return 100
  } else if (tablet.matches) {
    return 200
  } else {
    return 300
  }
}

export const createCurveFunction = (
  { width, height }: Viewport,
  size: number
) => {
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

    return { x, y }
  }
}

export const calculateOrigin = (
  { width, height }: Viewport,
  target: Position,
  offsetMagnitude = 40
): Position => {
  const center = { x: width / 2 - target.x, y: height / 2 - target.y }
  const magnitude = Math.sqrt(center.x ** 2 + center.y ** 2)
  const normalizedVectorToCenter = {
    x: center.x / magnitude,
    y: center.y / magnitude
  }

  return {
    x: -normalizedVectorToCenter.x * offsetMagnitude,
    y: -normalizedVectorToCenter.y * offsetMagnitude
  }
}
