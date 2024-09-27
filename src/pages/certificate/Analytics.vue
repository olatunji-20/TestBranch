<template>
  <div class="p-8 bg-gray-100">
    <div class="border border-blue-400 rounded-xl p-4 bg-white">
      <h2 class="font-bold text-xl">Analytics and Usage</h2>
      <div class="my-6 grid grid-cols-5 gap-6">
        <div class="border rounded-md border-green-500 h-[300px] col-span-3">
          <CertificationPublications />
        </div>
        <div class="border rounded-md border-blue-500 h-[300px] col-span-2">
          <CertificationHighlights />
        </div>
        <div class="border rounded-md border-purple-500 h-[300px] col-span-3">
          <GroupDistributions />
        </div>
        <div class="border rounded-md border-red-500 h-[300px] col-span-2">
          <TemplateUtilization />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import CertificationHighlights from 'src/components/Analytics/CertificationHighlights.vue';
import CertificationPublications from 'src/components/Analytics/CertificationPublications.vue';
import GroupDistributions from 'src/components/Analytics/GroupDistributions.vue';
import TemplateUtilization from 'src/components/Analytics/TemplateUtilization.vue';

</script>

<style>

</style>
