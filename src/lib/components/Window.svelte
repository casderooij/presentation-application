<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  import { DragGesture } from '@use-gesture/vanilla'

  export let size: number

  const minViewPort = 320
  const maxViewPort = 1200

  let isActive = false
  let coords = spring<{ x: number; y: number; opacity?: number }>(
    { x: 0, y: 0 },
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
  class="bg-red-200 touch-none cursor-move pointer-events-auto shadow-lg shadow-black/20"
  style="width: {size}px; transform: translate({$coords.x}px, {$coords.y}px);"
/>
