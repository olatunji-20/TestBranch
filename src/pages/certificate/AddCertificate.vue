<template>
  <div class="border-2 border-green-400 p-8 bg-gray-100">
    <div class="border border-blue-400 p-4 rounded-md bg-white">
        <router-link to="/certifications">
            <q-icon name="sms" class="bg-red-300 p-2 rounded-full q-mr-sm relative bottom-1" />
        </router-link>
        <h3 class="inline text-h5 font-bold">Create New Certificate</h3>
        
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Basic Details</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        <div class="py-2 grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <p class="font-bold">Certificate Name</p>
            <q-input type="text" rounded outlined placeholder="Certification name" dense />
          </div>
          <div>
            <p class="font-bold">Code (optional)</p>
            <q-input type="text" rounded outlined placeholder="Code" dense />
          </div>
          <div>            
            <p class="font-bold">Issuer</p>
            <q-input type="text" rounded outlined placeholder="Issuer" dense />
          </div>
          <div>            
            <p class="font-bold">Design</p>
            <q-select :options="options" type="text" rounded outlined label="Select design" dense />
          </div>
          <div>            
            <p class="font-bold">Group</p>
            <q-select :options="options" type="text" rounded outlined label="Select group" dense />
          </div>
        </div>
        
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Start Date</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        <div>
          <q-radio keep-color v-model="cert" val="issued" label="Certificates are valid from the day they are issued" color="red" /><br />
          <q-radio keep-color v-model="cert" val="fixed" label="Certificates are valid from a fixed date" color="red" />
          <div v-if="cert === 'fixed'" class="p-2 w-[50%] ml-10 bg-gray-200">
            <q-input class="rounded-full bg-white h-11 pt-1 px-4" size="sm" dense v-model="date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Expiry Date</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        <div>
          <q-checkbox keep-color v-model="expiry" val="issued" label="The certificate has an expiry date" color="red" /><br />

          <div v-if="expiry" class="ml-1">
            <q-radio keep-color v-model="expiryDate" val="fixedDuration" label="The certificate is valid for a fixed duration" color="red" /><br />
            <div v-if="expiryDate === 'fixedDuration'" class="p-2 w-[50%] ml-10 bg-gray-200">
              <q-select :options="options" rounded outlined label="1 Year" dense class="bg-white rounded-full" />            
            </div>
            <q-radio keep-color v-model="expiryDate" val="fixedDate" label="The certificate is valid until a fixed date" color="red" />
            <div v-if="expiryDate === 'fixedDate'" class="p-2 w-[50%] ml-10 bg-gray-200">
              <q-input class="rounded-full bg-white h-11 pt-1 px-4" size="sm" dense v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>

        </div>
        
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Certificate Sending</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Additional Actions</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        <p class="text-green-600 font-bold text-2xl">{{ expiry }}</p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const options = ['option-1', 'option-2', 'option-3'];
const cert = ref("")
const expiry = ref(false)
const expiryDate = ref("")
const date = ref('2019/02/01')
</script>

<style>

</style>