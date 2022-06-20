<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  import { DragGesture } from '@use-gesture/vanilla'

  export let ratio = '1 / 1'
  export let minWidth = 100
  export let maxWidth = 400
  export let size: number

  const minViewPort = 320
  const maxViewPort = 1200

  let widthClamp: string

  $: {
    const variablePart = (maxWidth - minWidth) / (maxViewPort - minViewPort)
    const constant = parseFloat(
      (maxWidth - maxViewPort * variablePart).toFixed(3)
    )
    widthClamp = `clamp(${minWidth}px,${
      constant ? ` ${constant}rem +` : ''
    } ${parseFloat((100 * variablePart).toFixed(2))}vw, ${maxWidth}px)`
  }

  let isActive = false
  let coords = spring<{ x: number; y: number; opacity?: number }>(
    {
      x: 0,
      y: 0
    },
    {
      stiffness: 0.02,
      damping: 0.15
    }
  )
  let element: HTMLElement

  onMount(() => {
    const gesture = new DragGesture(element, ({ active, offset: [ox, oy] }) => {
      isActive = active
      coords.set({ x: ox, y: oy })
    })

    return () => {
      gesture.destroy()
    }
  })
</script>

<div
  bind:this={element}
  class="bg-white border-2 border-black touch-none cursor-move"
  style="
    width: {size}px;
    aspect-ratio: {ratio};
    transform: translate({$coords.x}px, {$coords.y}px);
  "
/>
