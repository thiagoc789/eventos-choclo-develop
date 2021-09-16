<template>
  <div class="conotainer">
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px; margin-bottom: 10px'
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 3.4248780643411756, lng: -76.50884421203645 },
    }
  },
}
</script>