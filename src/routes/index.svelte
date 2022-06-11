<script lang="ts">
  import Box from '$lib/components/Box.svelte'
  import Container from '$lib/components/Container.svelte'

  const items = [{ id: 10 }, { id: 4 }, { id: 1 }, { id: 12 }]
</script>

<div class="container">
  <Container>
    {#each items as item}
      <Box />
    {/each}
  </Container>
</div>
