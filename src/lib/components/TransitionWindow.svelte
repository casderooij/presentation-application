<script lang="ts">
  import { windowIn } from '$lib/window'
  import { fade } from 'svelte/transition'

  export let position: {
    start: { x: number; y: number }
    end: { x: number; y: number }
  }
</script>

<div
  class="absolute"
  in:windowIn={{ start: position.start, end: position.end }}
  out:fade
>
  <slot />
</div>
