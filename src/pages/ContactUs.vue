<template>
  <div class="text-center">
    <div class="border-2 border-green-400 p-20 bg-gradient-to-b from-green-200 to-gray-50 ">
        <h2 class="text-h2 text-bold q-pt-md">Contact <span class="text-secondary">Us</span></h2>
        <p class="text-xl q-py-lg">At TestBranch, we value your questions, feedback, and suggestions. Our<br /> team is dedicated to providing you with the best support possible. </p>
    </div>
    <ContactForm />
    <Frequently />
    <CreateCertificate />
  </div>
</template>

<script setup>
import ContactForm from 'src/components/contact/ContactForm.vue';
import Frequently from 'src/components/contact/Frequently.vue';
import CreateCertificate from 'src/components/CreateCertificate.vue';

</script>

<style>

</style>