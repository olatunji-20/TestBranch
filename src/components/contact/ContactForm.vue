<template>
  <div class="border-2 border-purple-500 p-20 row justify-evenly">
    <div class="text-left">
        <h2 class="text-bold text-h4">Send Message</h2>
        <p class="text-body1">Feel free to send us a message, if you unable to find answer from our FAQ</p>

        <q-form>
            <q-input rounded outlined v-model="text" label="Your Name" bg-color="grey" class="my-10 h-4 input-box" />
            <q-input rounded outlined v-model="text" label="Your Email" bg-color="grey" class="my-10 h-4 input-box" />
            <q-input rounded outlined v-model="text" label="Your Phone" bg-color="grey" class="my-10 h-4 input-box" />
            <q-input
                v-model="text"
                filled
                rounded
                bg-color="grey"
                type="textarea"
                />

            <q-btn label="Send Message" class="q-my-xl q-px-lg" rounded outline />

        </q-form>
    </div>
    <div class="border-2 border-green-400 w-[400px] h-[400px] rounded-lg direct">
        
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.direct {
    background-image: url("contact_images/reach.png");
}

:deep(.input-box .q-field__control),
:deep(.input-box .q-field__marginal) {
  height: 50px;
}

</style>