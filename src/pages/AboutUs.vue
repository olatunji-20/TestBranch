<template>
  <div>
    <AboutLander />
    <div>
        <div class="row justify-between bg-green-50 p-20">
            <div class="col-6 row q-pt-lg">
                <h2 class="text-h6">ABOUT TEST BRANCH</h2>
                <h2 class="text-h4 text-bold q-p-md">Elevating <span class="text-secondary"> Digital Certificates </span>with Innovation and Reliability</h2>
                <p class="text-md q-pt-md col-11">At TestBranch, we are revolutionizing the future of digital certificates and certifications. Our mission is to make the creation, management, and distribution of certificates seamless, secure, and accessible to everyone.</p>
                <p class="text-md q-pt-md col-11">We use Blockchain technology to ensure your certificate data is safe, secure, and accessible. With TestBranch, you have full control over your certificate data. Only you own and control your data, and it is stored securely and indefinitely on the blockchain. This means your certificates are always accessible and protected from misuse.</p>
                <div class="q-mt-lg">
                    <q-btn label="Get Started - it's free" outline rounded no-caps />
                </div>
            </div>
            <div class="col-5">
                <img src="about_images/about-us-1.png" class="h-[400px] w-[100%]" />
            </div>
        </div>

        <div class="row justify-between px-20 py-24">            
            <div class="col-5 mt-12">
                <img src="about_images/about-us-2.png" class="border h-[300px]" />
            </div>
            <div class="col-5 row q-pt-lg">
                <h2 class="text-h4 text-bold q-py-xs">Our <span class="text-secondary"> Mission </span></h2>
                <p class="text-md q-pt-md col-11">Our mission is to make the creation, management, and distribution of certificates seamless, secure, and accessible for everyone.</p>
                <p class="text-md q-pt-md col-11">By leveraging Blockchain technology, we ensure that your certificate data remains safe, secure, and easily accessible. At TestBranch, you have full control over your certificate data. You own and manage your data, which is securely stored on the blockchain indefinitely. This means your certificates are always accessible and protected from misuse.</p>
                <div class="q-mt-lg">
                    <q-btn label="Get Started - it's free" outline rounded no-caps />
                    <q-btn label="Learn More" outline rounded no-caps class="q-ml-md" />
                </div>
            </div>
        </div>
    </div>
    <CreateCertificate />
  </div>
</template>

<script setup>
import CreateCertificate from '../components/CreateCertificate.vue'
import AboutLander from '../components/about/AboutLander.vue'

</script>

<style>

</style>