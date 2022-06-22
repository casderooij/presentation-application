<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  import { DragGesture } from '@use-gesture/vanilla'

  export let size: number
  export let onClick: any

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
  let scale = spring(1)
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
  on:pointerdown={() => {
    onClick()
    isActive = true
    scale.set(1.2)
  }}
  on:pointerup={() => {
    isActive = false
    scale.set(1)
  }}
  bind:this={element}
  class="bg-slate-300 border-2 touch-none cursor-move pointer-events-auto shadow-lg shadow-black/20 {isActive
    ? 'border-red-400'
    : 'border-black'}"
  style="width: {size}px; height: {size}px; transform: translate({$coords.x}px, {$coords.y}px) scale({$scale});"
/>
