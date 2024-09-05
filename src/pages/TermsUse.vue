<template>
  <div class="border-2 border-red-500">
    <div class="p-16 bg-[#242424] text-center relative overflow-hidden">
        <div class="w-[230px] h-[230px] absolute -bottom-28 -left-16">
            <img src="homepage_images/blue_v1.png" class="object-fit" />
        </div>
        <h2 class="text-white text-h4 font-bold">Terms of Use</h2>
        <div class="w-[230px] h-[230px] absolute top-4 -right-24">
            <img src="homepage_images/green_v1.png" class="object-fit" />
        </div>
    </div>
    <div class="border-4 border-blue-400 row justify-evenly q-pb-xl">
        <div class="border-red-400 border-2 w-[25%] p-16">
            <ul>
                <li class="font-medium text-lg py-2"><router-link to="/terms-of-use">Terms of Use</router-link></li>
                <li class="font-medium text-lg py-2"><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                <li class="font-medium text-lg py-2"><router-link to="/accessibility">Accessibility</router-link></li>
            </ul>
        </div>
        <div class="border-green-400 border-2 w-[70%] p-16">
            <h4 class="text-h4">Terms of Use</h4>
            
            <h5 class="text-h5 q-mt-xl">Welcome to TestBranch</h5>
            <p>By accessing and using the TestBranch website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>

            <h5 class="text-h5 q-mt-xl">License to Use Website</h5>
            <p>Unless otherwise stated, TestBranch and/or its licensors own the intellectual property rights published on this website and materials used on TestBranch. All intellectual property rights are reserved. You may access this from TestBranch for your own personal use subjected to restrictions set in these terms and conditions.</p>

            <h5 class="text-h5 q-mt-xl">User Responsibilities</h5>
            <ul class="list-disc list-inside">
                <li class="leading-10">Users must use the website in compliance with all applicable laws and regulations.</li>
                <li>Users are responsible for maintaining the confidentiality of their account information.</li>
                <li>Users must not engage in any unauthorized activities, including, but not limited to, modifying, distributing, or transmitting any part of the website without permission.</li>
            </ul>



            <h5 class="text-h5 q-mt-xl">Termination</h5>
            <p>TestBranch reserves the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h5 class="text-h5 q-mt-xl">Disclaimer</h5>
            <p>The materials on TestBranch’s website are provided "as is". TestBranch makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h5 class="text-h5 q-mt-xl">Limitations</h5>
            <p>In no event shall TestBranch or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TestBranch's website.</p>

            <h5 class="text-h5 q-mt-xl">Governing Law</h5>
            <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

            <h5 class="text-h5 q-mt-xl">Contact Us</h5>
            <p>If you have any questions about these Terms, please contact us at <span class="text-blue-600">info@testbranch.io</span> </p>
            
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>