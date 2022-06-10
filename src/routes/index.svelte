<script lang="ts">
  import Box from '$lib/components/Box.svelte'
  import Container from '$lib/components/Container.svelte'
  import { spring } from 'svelte/motion'

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  )

  let size = spring(10)

  const items = [{ id: 10 }, { id: 4 }, { id: 1 }, { id: 12 }]
</script>

<div class="container">
  <Container>
    {#each items as item}
      <Box />
    {/each}
  </Container>
</div>

<svg
  on:mousemove={e => coords.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
>
  <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
  .container {
    width: 100%;
    height: 100vh;
    background-color: darksalmon;
  }

  svg {
    width: 100%;
    height: 100vh;
  }
  circle {
    fill: #ff3e00;
  }
</style>
