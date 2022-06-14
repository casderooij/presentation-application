<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  type Position = {
    x: number
    y: number
  }

  export let from: Position
  export let to: Position
</script>

<div
  in:fly={{ x: from.x, y: from.y, easing: quintOut }}
  out:fade
  style="transform: translate3d({to.x}px,{to.y}px, 0);"
>
  <slot />
</div>
