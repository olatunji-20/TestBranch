<template>
  <div class="p-8 bg-gray-200">
    <div class="border border-blue-500 bg-white rounded-lg pb-20 relative">
      <div class="p-4">
        <div>
          <router-link to="/groups-and-members">
              <q-icon name="sms" class="bg-red-300 p-2 rounded-full q-mr-sm relative bottom-1" />
          </router-link>
          <h3 class="inline text-h5 font-bold">Edit Group and Members</h3>
        </div>
        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Basic Details</p>
          <hr class="flex-1 border border-purple-500" />
        </div>
        <div>
          <h4 class="text-bold leading-6">Group Name</h4>
          <q-input type="text" rounded outlined placeholder="Group name" dense />
          <div class="bg-blue-100 p-3 my-4 rounded-lg flex flex-row">
            <div class="border border-red-400 w-[20px] h-[20px]"></div>
            <div class="flex-1 ml-2">
              <p class="text-bold">Guide for adding Custom Attributes</p>
              <ol class="roman text-sm list-inside">
                <li>You can add up to 4 custom attributes to your members that can be shown on the certificate for example "Date of birth".</li>
                <li>All attribute are required on the certificate.</li>
                <li>These attributes should not include "Score" or "Grade" if the member will have multiple certificates. The "Score" or "Grade" attribute can be added in the "Certification" screen allowing a member to have multiple for multiple certification grades or scores.</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="flex flex-row items-center my-4">
          <p class="text-secondary w-[auto] font-bold mr-2">Custom Attributes</p>
          <hr class="flex-1 border border-purple-500" />
        </div>

        <div class="mb-4">
          <q-checkbox v-model="attrType" label="Add custom Attributes" />
          <div v-if="attrType" class="w-[50%] bg-gray-200 p-2 ml-10">
            <q-input placeholder="Attribute Label (e.g: Date of birth)" outlined rounded dense class="bg-white rounded-full" />
            <q-select :options="options" outlined rounded dense label="Select attribute type" class="mt-2 bg-white rounded-full" />
          </div>
        </div>
      </div>

      <hr class="border border-green-600" />

      <div class="p-4">
        <h1 class="text-xl text-bold">Manage Members</h1>
        <div class="my-2 row gap-x-10">
          <q-input icon="sms" outlined rounded dense placeholder="Search for member" class="flex-1">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn label="Add Member" icon="sms" no-caps flat rounded class="bg-green-500" />
          <q-btn label="Upload CSV" icon="sms" no-caps flat rounded class="bg-yellow-400" />
          <q-btn label="Transfer Ownership" outline icon="sms" no-caps rounded />
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const attrType = ref(false);

const options = ['option-1', 'option-2', 'option-3'];


</script>

<style scoped>
.roman {
  list-style-type: lower-roman;
}

</style>
