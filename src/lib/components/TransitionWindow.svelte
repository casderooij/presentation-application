<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  function windowIn(
    node: HTMLElement,
    {
      delay = 0,
      duration = 1400,
      from = { x: 0, y: 0 },
      to = { x: 0, y: 0 },
      easing = quintOut,
      opacity = 0
    }
  ) {
    node.style.transform = `translate(${to.x * 100}vw, ${to.y * 100}vh)`

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
        transform: ${transform} translate(${
        (1 - t) * (from.x + to.x) * 100
      }%, ${(1 - t) * (from.y + to.y) * 100}%);
      `
    }
  }

  type Position = {
    x: number
    y: number
  }

  export let from: Position
  export let to: Position
</script>

<div in:windowIn={{ from, to }} out:fade>
  <slot />
</div>
