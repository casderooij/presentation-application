import { writable } from 'svelte/store'
import type { Viewport, Project, Frame } from '$lib/types'
import { getFrameSize, createCurveFunction, calculateOrigin } from '$lib/utils'

export const frames = writable<Frame[]>([])

export const initFrames = (projects: Project[], viewport: Viewport) => {
  const size = getFrameSize()
  const curveFunction = createCurveFunction(viewport, size)
  frames.set(
    projects.map((project, i) => {
      const theta = i + 1 / projects.length
      const target = curveFunction(theta)
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
  )
}

export const reorderFrames = (frame: Frame) => {
  frames.update($frames => {
    const activeFrame = $frames.filter(f => f === frame)[0]
    const otherFrames = $frames.filter(f => f !== frame)
    return [...otherFrames, activeFrame]
  })
}
