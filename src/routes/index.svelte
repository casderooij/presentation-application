<script lang="ts">
  /**
   * Multiple windows with random from - to data
   * Delay each window (by index)
   * Maybe reset windows when client resizes window (throttle)
   */

  import TransitionWindow from '$lib/components/TransitionWindow.svelte'
  import Window from '$lib/components/Window.svelte'
  import { onMount } from 'svelte'

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

  onMount(() => (show = true))

  // let windows = [
  //   {
  //     start: {
  //       x: -0.2,
  //       y: -0.1
  //     },
  //     end: {
  //       x: 0.5,
  //       y: 0.5
  //     }
  //   },
  //   {
  //     start: {
  //       x: -0.2,
  //       y: -0.1
  //     },
  //     end: {
  //       x: 0.3,
  //       y: 0.2
  //     }
  //   },
  //   {
  //     start: {
  //       x: -0.2,
  //       y: -0.1
  //     },
  //     end: {
  //       x: 0.7,
  //       y: 0.7
  //     }
  //   }
  // ]

  let windows: any[] = []

  let innerWidth: number
  let innerHeight: number

  const NUMBER_OF_WINDOWS = {
    default: 3,
    '640': 4,
    '768': 5,
    '1024': 6
  }

  function getNumberOfWindows(viewportWidth: number) {
    if (viewportWidth < 640 && viewportWidth > 360) {
      return 4
    } else if (viewportWidth < 768 && viewportWidth > 640) {
      return 5
    } else if (viewportWidth < 1024 && viewportWidth > 768) {
      return 6
    } else {
      return 3
    }
  }

  function positionWindows() {}

  function resetWindows() {
    show = false

    // let delay = 250
    // let throttled = false

    // function getNumberOfWindows() {
    //   console.log(numberOfWindows(innerWidth))
    // }

    // if (!throttled) {
    //   getNumberOfWindows()
    //   throttled = true
    //   setTimeout(() => {
    //     throttled = false
    //   }, delay)
    // }

    // const numOfWindows = numberOfWindows()
    // Calculate number of windows relative to window size
    // Position windows
    // Set show to true
  }

  function lerp(
    a: [number, number],
    b: [number, number],
    t: number
  ): [number, number] {
    const x: [number, number] = [0, 0]
    for (let i = 0; i < 2; i++) {
      x[i] = +(a[i] + t * (b[i] - a[i])).toFixed(1)
    }
    return x
  }

  function initWindows(width: number) {
    const numberOfWindows = getNumberOfWindows(width)

    const startPoint: [number, number] = [0, 0]
    const endPoint: [number, number] = [1, 0.4]
    console.log(lerp(startPoint, endPoint, 0.6))
  }

  $: {
    initWindows(innerWidth)
  }

  // let timeout: NodeJS.Timeout
  // let delay = 250

  // $: {
  //   clearTimeout(timeout)
  //   timeout = setTimeout(() => console.log(numberOfWindows(innerWidth)), delay)
  // }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="bg-red-300 h-screen relative overflow-hidden">
  <!-- <input type="checkbox" bind:checked={show} class="absolute right-4" /> -->

  {#if show}
    {#each windows as position, index}
      <TransitionWindow {position} {index}>
        <Window ratio="2 / 2" minWidth={100} maxWidth={400} />
      </TransitionWindow>
    {/each}
  {/if}
</div>
