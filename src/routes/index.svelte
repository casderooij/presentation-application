<script lang="ts">
  import { onMount } from 'svelte'
  import { debounce } from 'lodash'
  import { frames, initFrames } from '$lib/frameStore'

  import FrameTransition from '$lib/components/FrameTransition.svelte'
  import Frame from '$lib/components/Frame.svelte'

  let width: number, height: number
  let initialized = {}

  onMount(() => {
    const projects = [
      { id: 1, title: '1', focus: false },
      { id: 2, title: '2', focus: false },
      { id: 3, title: '3', focus: false }
    ]
    initFrames(projects, { width, height })
    initialized = {}
  })

  const reset = () => {
    const projects = [
      { id: 1, title: '1', focus: false },
      { id: 2, title: '2', focus: false },
      { id: 3, title: '3', focus: false }
    ]
    initFrames(projects, { width, height })
    initialized = {}
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:resize={debounce(reset, 300)}
/>

{#key initialized}
  {#each $frames as frame, index (frame.project.title)}
    <FrameTransition position={frame.position} {index}>
      <Frame {frame} />
    </FrameTransition>
  {/each}
{/key}
