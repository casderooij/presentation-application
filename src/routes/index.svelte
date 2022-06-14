<script lang="ts">
  /**
   * Multiple windows with random from - to data
   * Delay each window (by index)
   * Maybe reset windows when client resizes window (throttle)
   */

  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'

  let show = false
  let position = {
    start: {
      x: -0.2,
      y: -0.1
    },
    end: {
      x: 0.5,
      y: 0.5
    }
  }
</script>

<div class="bg-red-300 h-screen relative overflow-hidden">
  <input type="checkbox" bind:checked={show} class="absolute right-4" />

  {#if show}
    <TransitionWindow {position}>
      <Window ratio="2 / 2" minWidth={100} maxWidth={400} />
    </TransitionWindow>
  {/if}
</div>
