<script lang="ts">
  import { createCurve } from '$lib/utils'

  let width: number, height: number

  function makeCurve() {
    const points = []
    const step = (2 * Math.PI) / 20
    const padding = 120
    const w = width / 2
    const h = height / 2
    const rx = (width - padding) / 2
    const ry = (height - padding) / 2

    for (let theta = Math.PI * 0; theta < 2 * Math.PI; theta += step) {
      const x =
        w +
        rx *
          Math.cos(theta * (Math.floor(Math.random() * 3) + 1) + Math.random())
      const y =
        h -
        ry *
          Math.sin(theta * (Math.floor(Math.random() * 3) + 1) + Math.random())
      points.push({ x: Math.round(x), y: Math.round(y) })
    }
    return points
  }

  let points: any[] = []

  let divSize = 100

  let items: any[]
  $: {
    const curve = createCurve(width, height)
    items = new Array(5)
    for (let i = 0; i < items.length; i++) {
      items[i] = curve(i / 0.2 - 1.8)
    }
    console.log(items)
  }
</script>

<svelte:head>
  <title>...</title>
</svelte:head>
<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div class="w-full h-screen">
  {#each items as point}
    <div
      class="absolute bg-red-500 rounded-3xl shadow-2xl"
      style="width: {divSize}px; height: {divSize}px; transform: translate({point[0] -
        divSize / 2}px, {point[1] - divSize / 2}px);"
    />
  {/each}
</div>
