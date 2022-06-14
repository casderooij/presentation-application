<script lang="ts">
  /**
   * Window has a starting position (relative to window size)
   * Window has a width and height
   * Window has meta data (image, name, tags)
   * Window has drag functionality
   */

  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'

  import { DragGesture } from '@use-gesture/vanilla'

  type Size = [number, number]
  export let size: Size

  const metaData = {
    name: 'test 1',
    tags: ['project', 'web']
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
