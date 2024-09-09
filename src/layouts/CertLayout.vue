<template>
    <q-layout view="lhh lpR lFf">
  
      <q-header class="bg-secondary text-white q-py-lg">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        </q-toolbar>
  
        
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <div class="border border-green-500 q-px-xl py-8">
            <q-img src="testbranch.png" alt="testbranch logo" class="" />
        </div>

        <div class="border-2 border-blue-400 pl-4">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <router-link :to="menuItem.link">
                <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple class="hover:bg-red-200 rounded-xl">
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
              </router-link>
            </template>

          </q-list>
        </div>
        
        <!-- drawer content -->
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  
      const leftDrawerOpen = ref(false)

        const menuList = [
          {
              icon: 'inbox',
              link: "/certifications",
              label: 'My Certifications',
          },
          {
              icon: 'send',
              link: "/account",
              label: 'Designs'
          },
          {
              icon: 'delete',
              link: "/groups-and-members",
              label: 'Groups & Members'
          },
          {
              icon: 'error',
              link: "/account",
              label: 'Approvers'
          },
          {
              icon: 'settings',
              link: "/analytics",
              label: 'Analytics'
          },
          {
              icon: 'feedback',
              link: "/account",
              label: 'Subscription and Billing'
          },
          {
              icon: 'help',
              link: "/account",
              label: 'Account'
          }
        ]

  
      
        const toggleLeftDrawer = () => {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
    
  </script>