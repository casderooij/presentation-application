<script lang="ts">
  import { onMount } from 'svelte'
  import { debounce } from 'lodash'
  import WindowGroup from '$lib/components/WindowGroup.svelte'

  let projects: any[] = []

  let width: number, height: number
  let mounted = false

  onMount(() => {
    projects = [
      { title: '1' },
      { title: '2' },
      { title: '3' },
      { title: '1' },
      { title: '2' },
      { title: '3' }
    ]
  })

  const reset = () => {
    projects = [
      { title: '1' },
      { title: '2' },
      { title: '3' },
      { title: '1' },
      { title: '2' },
      { title: '3' }
    ]
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:resize={debounce(reset, 300)}
/>

{#key projects}
  <WindowGroup {projects} viewport={{ width, height }} />
{/key}
