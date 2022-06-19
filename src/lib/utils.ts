import { quintOut } from 'svelte/easing'
import type { FlyParams, TransitionConfig } from 'svelte/transition'

export const makeWindows = (
  projects: any[],
  curveFunction: (theta: number) => {
    target: { x: number; y: number }
    size: number
  }
): any[] => {
  const windowArray = projects.map((project, index) => {
    const { target, size } = curveFunction(index + 1 / projects.length)
    const offset = { x: 100, y: target.y }
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
        x: Math.round(w + rx * Math.cos(theta * 1)),
        y: Math.round(h + ry * Math.sin(theta * 1.5))
      },
      size
    }
  }
}

interface WindowFlyParams extends FlyParams {
  offset: {
    x: number
    y: number
  }
  target: {
    x: number
    y: number
  }
  size: number
}

export const windowFly = (
  node: HTMLElement,
  {
    delay,
    duration = 10000,
    easing = quintOut,
    offset,
    target,
    size,
    opacity = 0
  }: WindowFlyParams
): TransitionConfig => {
  const style = getComputedStyle(node)
  const targetOpacity = +style.opacity
  const halfSize = size / 2

  node.style.transform = `matrix(1, 0, 0, 1, ${target.x - halfSize}, ${
    target.y - halfSize
  })`
  const transform = style.transform === 'none' ? '' : style.transform
  offset.x -= halfSize
  offset.y -= halfSize

  const od = targetOpacity * (1 - opacity)

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
        transform: ${transform} translate(${(1 - t) * offset.x}px, ${
      (1 - t) * offset.y
    }px);
        opacity: ${targetOpacity - od * u}
      `
  }
}
