<template>
  <div class="border-2 border-red-400 p-20 relative overflow-hidden">
    <div class="h-[250px] w-[80px] absolute -top-8 left-0">
        <img src="/contact_images/frequent-blue.png" class="object-fit h-[100%] w-[100%]" />
    </div>
    <h2 class="text-h6">FREQUENTLY ASKED QUESTIONS</h2>
    <h2 class="text-h4 text-bold">Have Questions? We are <span class="text-secondary">here</span> for you.</h2>
    <p class="text-md">Here are answers to the most common questions. If you don't find what<br /> you're looking for, feel free to chat or message us.</p>

    <div class="q-mt-xl w-[75%] mx-auto text-left">
      <q-expansion-item
        v-for="question in questions" :key="question.id"
            :label="question.header"
            class="bg-green-50  border border-green-400 q-my-sm rounded-lg text-bold "
      >
        <p class="p-4 font-light text-md">{{ question.details }}</p>          
      </q-expansion-item>
    </div>

    <div class="h-[300px] w-[80px] absolute -bottom-8 -right-8">
        <img src="/contact_images/frequent-green.png" class="object-fit h-[100%] w-[100%]" />
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
    {
        id: 1,
        header: "Why choose TestBranch?",
        details: "TestBranch is designed to make the process of creating, editing, approving, and issuing certificates incredibly easy. Our platform is feature-rich and user-friendly, allowing you to collaborate seamlessly with others in the approval and issuance of certificates. Whether you need to set up simple or complex conditions for issuing certificates, TestBranch has you covered. Additionally, our platform integrates effortlessly into your existing workflow. By leveraging blockchain technology, we ensure that your certificate data is safe, secure, accessible, and never misused, all without adding unnecessary complexity."
    },
    {
        id: 2,
        header: "What are the benefits of having certificate data on the Blockchain?",
        details: "TestBranch is designed to make the process of creating, editing, approving, and issuing certificates incredibly easy. Our platform is feature-rich and user-friendly, allowing you to collaborate seamlessly with others in the approval and issuance of certificates. Whether you need to set up simple or complex conditions for issuing certificates, TestBranch has you covered. Additionally, our platform integrates effortlessly into your existing workflow. By leveraging blockchain technology, we ensure that your certificate data is safe, secure, accessible, and never misused, all without adding unnecessary complexity."
    },
    {
        id: 3,
        header: "What are the new possibilities with TestBranch digital certificates?",
        details: "TestBranch is designed to make the process of creating, editing, approving, and issuing certificates incredibly easy. Our platform is feature-rich and user-friendly, allowing you to collaborate seamlessly with others in the approval and issuance of certificates. Whether you need to set up simple or complex conditions for issuing certificates, TestBranch has you covered. Additionally, our platform integrates effortlessly into your existing workflow. By leveraging blockchain technology, we ensure that your certificate data is safe, secure, accessible, and never misused, all without adding unnecessary complexity."
    },
    {
        id: 4,
        header: "How can I start with TestBranch certificates?",
        details: "TestBranch is designed to make the process of creating, editing, approving, and issuing certificates incredibly easy. Our platform is feature-rich and user-friendly, allowing you to collaborate seamlessly with others in the approval and issuance of certificates. Whether you need to set up simple or complex conditions for issuing certificates, TestBranch has you covered. Additionally, our platform integrates effortlessly into your existing workflow. By leveraging blockchain technology, we ensure that your certificate data is safe, secure, accessible, and never misused, all without adding unnecessary complexity."
    }
])

</script>

<style>

</style>