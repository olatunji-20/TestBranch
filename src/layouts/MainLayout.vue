<template>
  <q-layout>
    <NavBar />
      <q-page-container>
        <router-view />
      </q-page-container>
    <FootBar />
  </q-layout>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import FootBar from '../components/FootBar.vue';

defineOptions({
  name: 'MainLayout'
})
</script>
