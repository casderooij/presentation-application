<script lang="ts">
  import { makeWindows, makeCurve } from '$lib/utils'
  import { onMount } from 'svelte'
  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'

  const projects = [{ title: '1' }, { title: '2' }, { title: '3' }]

  let width: number, height: number
  let windows: any[] = []
  let mounted = false

  function init() {
    const curveFunc = makeCurve(width, height)
    windows = makeWindows(projects, curveFunc)
  }

  onMount(() => {
    init()
  })
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<input type="checkbox" bind:checked={mounted} />

{#if mounted}
  {#each windows as window}
    <TransitionWindow
      target={window.position.target}
      offset={window.position.offset}
      size={window.size}
    >
      <Window size={window.size} />
    </TransitionWindow>
  {/each}
{/if}
