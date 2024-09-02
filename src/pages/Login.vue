<template>
  <div class="border-2 border-blue-400 text-center">
    <q-card class="w-[550px] mx-auto my-24 p-4 rounded-lg">
        <q-card-section>
            <p class="font-bold text-lg">Log in to your Account</p>
        </q-card-section>
        <q-card-section>
            <q-btn outline label="Log in with Google" no-caps rounded icon="sms" class="w-full q-my-xs" />
            <q-btn outline label="Log in with Microsoft" no-caps rounded icon="sms" class="w-full q-my-xs" />
            <q-btn outline label="Log in with Facebook" no-caps rounded icon="sms" class="w-full q-my-xs" />
        </q-card-section>
        <p class="text-xs">or using your email</p>
        <q-card-section class="text-left">
            <p class="">Email</p>
            <q-input outlined rounded dense type="email" />
            <p class="q-mt-sm">Password</p>
            <q-input outlined rounded dense type="password" />

            <p class="text-right q-mt-md text-secondary">Forgot Password?</p>
            
            <q-btn label="Log in" no-caps rounded class="w-full q-my-lg" />

            <p class="text-center font-bold">New to TestBranch? <span class="text-blue-600 underline"><router-link to="/signup">Sign up</router-link></span></p>

        </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

</script>

<style>

</style>