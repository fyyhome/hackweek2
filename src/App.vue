<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(./assets/css/public.css);
#app{
  width: 10rem;
  margin: auto;
}
#app > div{
  position: relative;
}
</style>
