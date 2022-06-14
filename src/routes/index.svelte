<script lang="ts">
  /**
   * Multiple windows with random from - to data
   * Delay each window (by index)
   */

  import Container from '$lib/components/Container.svelte'
  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'

  let show = false
  let position = {
    start: {
      x: 0.2,
      y: 0.2
    },
    end: {
      x: 0.5,
      y: 0.5
    }
  }
</script>

<Container>
  <input type="checkbox" bind:checked={show} class="absolute right-4" />
  {#if show}
    <TransitionWindow {position}>
      <Window size={[200, 200]} />
    </TransitionWindow>
  {/if}
</Container>
