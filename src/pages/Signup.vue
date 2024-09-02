<template>
    <div class="border-2 border-blue-400 text-center">
    <q-card class="w-[550px] mx-auto my-24 p-4 rounded-lg">
        <q-card-section>
            <p class="font-bold text-lg">Create an Account</p>
            <p class="text-xs">New to TestBranch? To get started create your account</p>
        </q-card-section>
        <q-card-section>
            <q-btn outline label="Log in with Google" no-caps rounded icon="sms" class="w-full q-my-xs" />
            <q-btn outline label="Log in with Microsoft" no-caps rounded icon="sms" class="w-full q-my-xs" />
            <q-btn outline label="Log in with Facebook" no-caps rounded icon="sms" class="w-full q-my-xs" />
        </q-card-section>
        <p class="text-xs">or using your email</p>
        <q-card-section class="text-left">
            <p class="">Full Name</p>
            <q-input outlined rounded dense type="text" />
            <p class="q-mt-sm">Email</p>
            <q-input outlined rounded dense type="email" />
            <p class="q-mt-sm">Password</p>
            <q-input outlined rounded dense type="password" />
            
            <q-btn label="Sign up" no-caps rounded class="w-full q-my-lg" />

            <p class="text-center font-bold">Already a TestBranch User? <span class="text-blue-600 underline"><router-link to="/login">Log in Now</router-link></span></p>

        </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

</script>

<style>

</style>