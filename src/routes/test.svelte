<script lang="ts">
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
      points.push({ x: +x.toFixed(1), y: +y.toFixed(1) })
    }
    return points
  }

  let points: any[] = []

  let divSize = 100

  $: {
    points = makeCurve()
    console.log({ width, height })
  }
</script>

<svelte:head>
  <title>...</title>
</svelte:head>
<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div class="w-full h-screen">
  {#each points as point}
    <div
      class="absolute bg-red-500 rounded-3xl shadow-2xl"
      style="width: {divSize}px; height: {divSize}px; transform: translate({point.x -
        divSize / 2}px, {point.y - divSize / 2}px);"
    />
  {/each}
</div>
