<template>
  <div>
    <Lander />
    <CreateCertificate />
    <WhyTest />
    <Transparency />
    <Possibilities />
    <Customize />
    <Start />
  </div>
</template>

<script setup>
import Lander from '../components/homepage/Lander.vue'
import CreateCertificate from '../components/CreateCertificate.vue'
import WhyTest from '../components/homepage/WhyTest.vue'
import Transparency from '../components/homepage/Transparency.vue'
import Possibilities from '../components/homepage/Possibilities.vue'
import Customize from '../components/homepage/Customize.vue'
import Start from '../components/homepage/Start.vue'

defineOptions({
  name: 'IndexPage'
});
</script>
