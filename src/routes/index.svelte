<script lang="ts">
  import { onMount } from 'svelte'
  import { debounce } from 'lodash'
  import { getWindowSizes } from '$lib/utils'
  import WindowGroup from '$lib/components/WindowGroup.svelte'

  let projects: any[] = []
  let size: number

  let width: number, height: number
  let mounted = false

  onMount(() => {
    projects = [
      { id: 1, title: '1', focus: true },
      { id: 2, title: '2', focus: false },
      { id: 3, title: '3', focus: false }
    ]
    size = getWindowSizes()!.min
  })

  const reset = () => {
    projects = [
      { id: 1, title: '1', focus: false },
      { id: 2, title: '2', focus: true },
      { id: 3, title: '3', focus: false }
    ]
    size = getWindowSizes()!.min
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:resize={debounce(reset, 300)}
/>

{#key projects}
  <WindowGroup {projects} viewport={{ width, height }} {size} />
{/key}
