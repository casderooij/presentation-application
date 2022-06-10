<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'
  import { DragGesture } from '@use-gesture/vanilla'

  let gesture: DragGesture
  let isActive = false
  let element: HTMLDivElement

  let coords = spring<{ x: number; y: number; opacity?: number }>(
    {
      x: 0,
      y: 0,
      opacity: 1
    },
    {
      stiffness: 0.02,
      damping: 0.15
    }
  )

  onMount(() => {
    gesture = new DragGesture(element, ({ active, offset: [ox, oy] }) => {
      isActive = active
      coords.set({ x: active ? ox : ox, y: active ? oy : oy })
    })

    return () => {
      gesture.destroy()
    }
  })
</script>

<div
  bind:this={element}
  style="transform: translate3d({$coords.x}px, {$coords.y}px, 0); opacity: {$coords.opacity}; background: {isActive
    ? 'red'
    : 'blue'}"
/>

<style>
  div {
    width: 60px;
    height: 60px;
    position: absolute;
    margin-left: 12px;
    margin-bottom: 12px;
    border: 2px solid white;
    cursor: pointer;
    touch-action: none;
  }
</style>
