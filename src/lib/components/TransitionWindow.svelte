<script lang="ts">
  import { fade } from 'svelte/transition'
  import { windowFly } from '$lib/utils'

  export let target: { x: number; y: number }
  export let offset: { x: number; y: number }
  export let size: number
</script>

<div
  class="absolute"
  in:windowFly={{
    offset,
    target,
    size
  }}
  out:fade
>
  <slot />
</div>
