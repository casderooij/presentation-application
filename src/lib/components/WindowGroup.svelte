<script lang="ts">
  import { makeWindows, makeCurve, type Viewport } from '$lib/utils'
  import WindowTransition from './WindowTransition.svelte'
  import Window from '$lib/components/Window.svelte'

  export let viewport: Viewport
  export let projects: any[]

  const curveFunc = makeCurve(viewport)
  const windows = makeWindows(projects, viewport, curveFunc)
</script>

{#each windows as window, index}
  <WindowTransition
    target={window.position.target}
    origin={window.position.origin}
    {index}
  >
    <Window size={window.size} />
  </WindowTransition>
{/each}
