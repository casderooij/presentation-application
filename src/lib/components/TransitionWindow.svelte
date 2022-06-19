<script lang="ts">
  import { fade } from 'svelte/transition'
  import { fly } from 'svelte/transition'

  export let target: { x: number; y: number }
  export let offset: { x: number; y: number }
</script>

<div
  class="absolute"
  in:fly={{
    x: offset.x,
    y: offset.y
  }}
  out:fade
  style="
    transform: translate({target.x}px, {target.y}px);
  "
>
  <slot />
</div>
