<template>
    <q-footer class="bg-primary q-pt-xl flex justify-evenly items-center">
        <div class="border w-[250px] h-16">
            <q-img src="/testbranch.png" class="object-fit" />
        </div>
        <div class="border h-[200px] w-[200px]">
            <p class="text-h6">Main Links</p>
            <ul class="q-mt-sm">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about-us" >About us</router-link></li>
                <li> <router-link to="/features-and-pricing" >Features and Pricing</router-link></li>
                <li><router-link to="/login">Login</router-link> / <router-link to="/signup">Sign up</router-link></li>
            </ul>
        </div>
        <div class="border h-[200px] w-[200px]">
            <p class="text-h6">Legal & Support</p>
            <ul class="q-mt-sm">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Accessibility</li>
                <li><router-link to="/contact-us"> Contact us</router-link></li>
                <li>Help Center</li>
            </ul>
        </div>
        <div class="border h-[200px] w-[200px]">
            <p class="text-h6">Connect us on</p>
            <div class="border mt-2 w-[40px] h-[40px]"></div>
        </div>
        <div class="w-full border h-8 mt-8 flex justify-center items-center">
            <p class="">All rights reserved</p>
        </div>
    </q-footer>
  
</template>

<script setup>
defineOptions({
    name: "FootBar"
})

</script>

<style>

</style>