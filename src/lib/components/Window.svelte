<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  import { DragGesture } from '@use-gesture/vanilla'

  /**
   * TODO: size as percentages [0.75, 1.2]
   */
  type Size = [number, number]

  export let size: Size

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
    const gesture = new DragGesture(
      element,
      ({ active, offset: [ox, oy], initial }) => {
        isActive = active
        coords.set({ x: ox, y: oy })
      }
    )

    return () => {
      gesture.destroy()
    }
  })
</script>

<div
  bind:this={element}
  class="bg-blue-500 touch-none"
  style="width: {size[0]}px; height: {size[1]}px; transform: translate({$coords.x}px, {$coords.y}px);"
/>
