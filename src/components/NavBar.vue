<template>
  <q-header class="bg-secondary q-py-lg q-px-xl flex justify-between items-center px-20">
    <div class="h-12 w-[200px]">
        <q-img src="/testbranch.png" alt="testbranch logo" />
    </div>

    <ul style="list-style-type: none;">
        <li class="inline-block"><router-link to="/">Home</router-link></li>
        <li class="inline-block ml-6"><router-link to="/features-and-pricing">Features and Pricing</router-link> </li>
        <li class="inline-block ml-6"><router-link to="/contact-us">Contact us</router-link></li>
    </ul>

    <div class="">
        <q-btn label="Log in" to="/login" outline rounded no-caps />
        <q-btn label="Sign up" to="/signup" outline rounded no-caps class="q-ml-md" />
    </div>
  </q-header>
</template>

<script setup>
defineOptions({
    name: "NavBar"
})
</script>

<style>

</style>