<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
.router-link-exact-active {
  color: red;
}
</style>
