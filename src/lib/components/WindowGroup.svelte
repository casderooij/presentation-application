<script lang="ts">
  import { makeWindows, makeCurve } from '$lib/utils'
  import WindowTransition from './WindowTransition.svelte'
  import Window from '$lib/components/Window.svelte'

  export let width: number
  export let height: number
  export let projects: any[]

  const curveFunc = makeCurve(width, height)
  const windows = makeWindows(projects, curveFunc)
</script>

{#each windows as window, index}
  <WindowTransition
    target={window.position.target}
    offset={window.position.offset}
    {index}
  >
    <Window size={window.size} />
  </WindowTransition>
{/each}
