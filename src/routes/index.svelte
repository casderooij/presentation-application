<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'

  let show = false
</script>

<Container>
  <input type="checkbox" bind:checked={show} class="absolute right-4" />
  {#if show}
    <TransitionWindow from={{ x: -1.2, y: -1.8 }} to={{ x: 0.5, y: 0.5 }}>
      <Window size={[200, 200]} />
    </TransitionWindow>
  {/if}
</Container>
