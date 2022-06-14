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
  node.style.transform = `translate(${end.x * 100}vw, ${end.y * 100}vh)`

  const style = getComputedStyle(node)
  const target_opacity = +style.opacity
  const transform = style.transform === 'none' ? '' : style.transform

  const od = target_opacity * (1 - opacity)

  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
        opacity: ${target_opacity - od * u};
        transform: ${transform} translate(${(1 - t) * start.x * 100}%, ${
      (1 - t) * start.y * 100
    }%);
      `
  }
}
