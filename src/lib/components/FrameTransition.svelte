<script lang="ts">
  import { fade } from 'svelte/transition'
  import { fly } from 'svelte/transition'
  import type { Position } from '$lib/types'

  export let position: { target: Position; origin: Position }
  export let index: number
</script>

<div
  class="absolute pointer-events-none"
  in:fly={{
    x: position.origin.x,
    y: position.origin.y,
    delay: 200 + index * 100
  }}
  out:fade
  style="transform: translate({position.target.x}px, {position.target.y}px);"
>
  <slot />
</div>
