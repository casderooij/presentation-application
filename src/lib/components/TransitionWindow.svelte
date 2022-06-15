<script lang="ts">
  import { windowIn } from '$lib/window'
  import { fade } from 'svelte/transition'

  export let position: {
    start: { x: number; y: number }
    end: { x: number; y: number }
  }
  export let index: number
</script>

<div
  class="absolute"
  in:windowIn={{
    start: position.start,
    end: position.end,
    delay: (index + 1) * 100
  }}
  out:fade
>
  <slot />
</div>
