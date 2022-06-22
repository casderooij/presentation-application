<script lang="ts">
  import { makeWindows, makeCurve, type Viewport } from '$lib/utils'
  import WindowTransition from './WindowTransition.svelte'
  import Window from '$lib/components/Window.svelte'

  export let viewport: Viewport
  export let projects: any[]

  const curveFunc = makeCurve(viewport)
  let windows = makeWindows(projects, viewport, curveFunc)
</script>

{#each windows as window, index (window.project.title)}
  <WindowTransition
    target={window.position.target}
    origin={window.position.origin}
    {index}
  >
    <Window
      size={window.size}
      onClick={() => {
        windows.splice(windows.length, 0, windows.splice(index, 1)[0])
        windows = windows
      }}
    />
  </WindowTransition>
{/each}
