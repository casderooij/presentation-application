<script lang="ts">
  import WindowGroup from '$lib/components/WindowGroup.svelte'

  const projects = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '3' },
    { title: '3' },
    { title: '3' },
    { title: '3' },
    { title: '3' },
    { title: '3' },
    { title: '3' }
  ]

  let width: number, height: number
  let mounted = false
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<input type="checkbox" bind:checked={mounted} />

{#if mounted}
  <WindowGroup {projects} {width} {height} />
{/if}
