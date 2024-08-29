<template>
  <div class="border-2 border-green-500 text-center p-20">
    <h2 class="text-h6">OUR PLANS AND PRICING</h2>
    <h2 class="text-h4 text-bold">Choose the right <span class="text-secondary">plan</span> for your needs</h2>
    
    <div class="border-2 border-red-500 q-my-xl px-24 q-py-md grid grid-cols-3 items-end q-gutter-xs">
        <q-card class="h-[320px] rounded-xl">
            <q-card-section class="row q-pb-md">
                <div class="border w-[50px] h-[50px]"></div>
                <div class="border h-[50px] text-left">
                    <p>FREE</p>
                    <p class="font-bold text-body1">$0 USD</p>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="text-left mb-16">
                <p class=""><q-icon name="sms" /> Branching Logic</p>
                <p class=""><q-icon name="sms" /> Send Certificates</p>
            </q-card-section>

            <q-card-section>
                <q-btn label="Get Started" no-caps rounded outline class="w-[100%]" />
                <p class="underline q-mt-sm">Compare Limits</p>
            </q-card-section>
        </q-card>

        <q-card class="h-[420px] rounded-xl">
            <q-card-section class="row q-pb-md">
                <div class="border w-[50px] h-[50px]"></div>
                <div class="border h-[50px] text-left">
                    <p>PREMIUM</p>
                    <p class="font-bold text-body1">$69 USD <span class="font-thin text-sm">/ Yearly</span></p>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="text-left mb-20">
                <p class=""><q-icon name="sms" /> Branching Logic</p>
                <p class=""><q-icon name="sms" /> Email Support</p>
                <p class=""><q-icon name="sms" /> Customizable Temolates</p>
                <p class=""><q-icon name="sms" /> Sub Accounts</p>
                <p class=""><q-icon name="sms" /> Send Certificates</p>
                <p class=""><q-icon name="sms" /> Remote API Publishing</p>
            </q-card-section>

            <q-card-section>
                <q-btn label="Buy Plan" no-caps rounded outline class="w-[100%]" />
                <p class="underline q-mt-sm">Compare Limits</p>
            </q-card-section>
        </q-card>

        <q-card class="h-[320px] rounded-xl">
            <q-card-section class="row q-pb-md">
                <div class="border w-[50px] h-[50px]"></div>
                <div class="border h-[50px] text-left">
                    <p>STARTER</p>
                    <p class="font-bold text-body1">$29 USD <span class="font-thin text-sm">/ Yearly</span> </p>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="text-left q-mb-4">
                <p class=""><q-icon name="sms" /> Branching Logic</p>
                <p class=""><q-icon name="sms" /> Email Support</p>
                <p class=""><q-icon name="sms" /> Customizable Temolates</p>
                <p class=""><q-icon name="sms" /> Sub Accounts</p>
                <p class=""><q-icon name="sms" /> Send Certificates</p>
            </q-card-section>

            <q-card-section>
                <q-btn label="Buy Plan" no-caps rounded outline class="w-[100%]" />
                <p class="underline q-mt-sm">Compare Limits</p>
            </q-card-section>
        </q-card>
    </div>

    <div class="border-2 border-green-400">
        <Tables />
    </div>

  </div>
</template>

<script setup>
import Tables from './Tables.vue'
</script>

<style>

</style>