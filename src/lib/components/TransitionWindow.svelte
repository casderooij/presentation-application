<script lang="ts">
  import { windowIn } from '$lib/window'
  import { fade } from 'svelte/transition'

  type Position = {
    x: number
    y: number
  }

  export let position: { start: Position; end: Position }
</script>

<div in:windowIn={{ start: position.start, end: position.end }} out:fade>
  <slot />
</div>
