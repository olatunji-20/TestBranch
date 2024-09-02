<template>
  <div class="border-2 border-purple-500 p-20 row justify-evenly">
    <div class="text-left">
        <h2 class="text-bold text-h4">Send Message</h2>
        <p class="text-body1">Feel free to send us a message, if you unable to find answer from our FAQ</p>

        <q-form>
            <q-input outlined rounded dense v-model="text" label="Your Name" bg-color="grey" class="my-10 h-4 input-box" />
            <q-input outlined rounded dense v-model="text" label="Your Email" bg-color="grey" class="my-10 h-4 input-box" />
            <q-input outlined rounded dense v-model="text" label="Your Phone" bg-color="grey" class="my-10 h-4 input-box" />

            <div class="">
              <input
                  v-model="text"
                  bg-color="grey"
                  type="textarea"
                  placeholder="Your Message"
                  class="w-[100%] h-[150px] rounded-2xl border-2 border-green-500 bg-gray-300 indent-2"
                  />
            </div>

            <q-btn label="Send Message" class="q-mt-xl q-px-lg" rounded outline />

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
</style>