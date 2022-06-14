<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'

  let show = false
</script>

<Container>
  <input type="checkbox" bind:checked={show} class="absolute right-4" />
  {#if show}
    <TransitionWindow from={{ x: -20, y: -40 }} to={{ x: 30, y: 100 }}>
      <Window size={[200, 200]} />
    </TransitionWindow>
  {/if}
</Container>
