<template>
  <div class="text-center border-2 border-red-400 p-20">    
    <h2 class="text-h6">RELIABLE DIGITAL PROPERTY</h2>
    <h2 class="text-h3 text-bold">Why <span class="text-secondary">TestBranch</span></h2>

    <div class="border border-green-400 q-px-md q-my-xl grid grid-cols-3 gap-10">
        
        <q-card v-for="reason in reasons" :key="reason.id">
            <q-card-section>
                <p class="text-bold text-lg">{{ reason.topic }}</p>
            </q-card-section>
            <q-card-section>
                <q-icon :name="reason.icon" size="70px" class="q-my-md" />
            </q-card-section>
            <q-card-section>
                <p class="text-sm">{{ reason.explanation }}.</p>
            </q-card-section>
        </q-card>

    </div>
    
    <q-btn label="Get Started - it's free" outline rounded no-caps class="q-mt-lg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reasons = ref([
    {
        id: 1,
        topic: "All in one platform",
        icon: "sms",
        explanation: "Easily design, edit, approve and issue certificates"
    },
    {
        id: 2,
        topic: "User-friendly interface",
        icon: "sms",
        explanation: "Feature rich and is easy to use"
    },
    {
        id: 3,
        topic: "Real time Collaboration",
        icon: "sms",
        explanation: "Collaborate with others to approve and issue certificates"
    },
    {
        id: 4,
        topic: "Apply Complex Conditions",
        icon: "sms",
        explanation: "Create simple or complex conditions in which to issue certificates"
    },
    {
        id: 5,
        topic: "Integrate Instantly",
        icon: "sms",
        explanation: "Easily integrate TestBranch into your workflow"
    },
    {
        id: 6,
        topic: "NFT based Storage",
        icon: "sms",
        explanation: "Data secured on Blockchain: safe, accessible, no misuse"
    }
]);

</script>

<style>

</style>