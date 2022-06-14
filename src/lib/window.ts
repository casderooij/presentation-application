import { quintOut } from 'svelte/easing'

export function windowIn(
  node: HTMLElement,
  {
    delay = 0,
    duration = 1400,
    start = { x: 0, y: 0 },
    end = { x: 0, y: 0 },
    easing = quintOut,
    opacity = 0
  }
) {
  const style = getComputedStyle(node)
  const target_opacity = +style.opacity

  const halfWidth = parseInt(style.width, 10) / 2
  const halfHeight = parseInt(style.height, 10) / 2

  let startX: number, startY: number

  const parent = node.parentElement
  const pStyle = getComputedStyle(parent!)
  const pWidth = parseInt(pStyle.width, 10)
  const pHeight = parseInt(pStyle.height, 10)

  startX = pWidth * start.x
  startY = pHeight * start.y

  const endXinVw = (pWidth * end.x - halfWidth) / (pWidth / 100)
  const endYinVh = (pHeight * end.y - halfHeight) / (pHeight / 100)

  node.style.transform = `translate(${endXinVw}vw, ${endYinVh}vh)`
  const transform = style.transform === 'none' ? '' : style.transform
  const od = target_opacity * (1 - opacity)

  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
      opacity: ${target_opacity - od * u};
      transform:
        ${transform}
        translate(${(1 - t) * startX}px, ${(1 - t) * startY}px);
    `
  }
}
