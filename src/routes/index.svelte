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
    projects = [{ title: '1' }, { title: '2' }, { title: '3' }]
    size = getWindowSizes()!.min
  })

  const reset = () => {
    projects = [{ title: '1' }, { title: '2' }, { title: '3' }]
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
