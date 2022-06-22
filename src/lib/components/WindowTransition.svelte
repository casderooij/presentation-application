<script lang="ts">
  import { fade } from 'svelte/transition'
  import { fly } from 'svelte/transition'
  import type { Position } from '$lib/utils'

  export let target: Position
  export let origin: Position
  export let index: number
</script>

<div
  class="absolute pointer-events-none"
  in:fly={{
    x: origin.x,
    y: origin.y,
    delay: 200 + index * 100
  }}
  out:fade
  style="transform: translate({target.x}px, {target.y}px);"
>
  <slot />
</div>
