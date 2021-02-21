<template>
  <nav>
    <div class="relative transition-colors duration-300">
      <div class="w-full mx-auto">
        <div
            class="flex justify-between items-center border-b-2 border-gray-100 dark:border-prussian-blue transition-colors duration-300 py-4 md:justify-start md:space-x-10 px-4">
          <div class="flex lg:w-0 mr-6">
            <g-link to="/">
              <span class="sr-only">Home</span>
              <svg id="Layer_1" class="w-10 h-10 fill-current text-green-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <title>mj</title>
                <path class="cls-1"
                      d="M247.08,48.53q-4.62-5.19-12.53-5.2c-.21,0-.41,0-.61,0l-.66,0q-11,0-17.52,12.77L150.13,181.72,84.21,56.1Q77.67,43.34,66.09,43.33q-8.31,0-13.21,5.2T48,62.34v175.8q0,8.31,4.45,13.06T64.61,256q7.71,0,12.32-4.9t4.6-12.91V117.27l50.78,94.14q3.57,6.84,7.72,9.8a16.42,16.42,0,0,0,9.8,3,15.87,15.87,0,0,0,9.8-3.12,29.53,29.53,0,0,0,7.73-9.65l50.3-95.28v79q0,14.55-5.55,21.68t-16.36,7.72l-8.44.59q-7.12.6-10.42,4.31t-3.3,10.84q0,16.64,20.32,15.73l8.44-.59q49.35-4.16,49.35-60.28V62.34Q251.7,53.73,247.08,48.53Z"/>
              </svg>
            </g-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
                id="mobile-menu-button"
                type="button"
                @click="toggleMenu"
                class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-prussian-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
              <span class="sr-only">Open menu</span>
              <svg
                  class="pointer-events-none h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex lg:flex-1 space-x-5">
            <g-link
                to="/"
                class="text-xl font-bold text-gray-400 hover:text-gray-500"
                exact-active-class="text-green-500"
            >
              Home
            </g-link>
            <g-link
                to="/portfolio"
                class="text-xl font-bold text-gray-400 hover:text-gray-500"
                active-class="text-green-500"
            >
              Portfolio
            </g-link>

          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://github.com/MattJarman" target="_blank" class="flex items-center justify-center mr-3">
              <font-awesome-icon class="w-7 h-7 text-2xl text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500" :icon="['fab', 'github']"/>
            </a>
            <theme-switcher class="w-7 h-7 text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500"/>
          </div>
        </div>
      </div>
      <transition
          enter-active-class="duration-200 ease-out"
          enter-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
      >
        <div
            v-show="this.isMenuOpen"
            v-on-clickaway.native="hideMenu"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white transition-colors duration-300 dark:bg-rich-black divide-y-2 divide-gray-50 dark:divide-prussian-blue">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <g-link to="/">
                  <span class="sr-only">Me</span>
                  <svg id="Layer_1" class="w-10 h-10 fill-current text-green-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <title>mj</title>
                    <path class="cls-1"
                          d="M247.08,48.53q-4.62-5.19-12.53-5.2c-.21,0-.41,0-.61,0l-.66,0q-11,0-17.52,12.77L150.13,181.72,84.21,56.1Q77.67,43.34,66.09,43.33q-8.31,0-13.21,5.2T48,62.34v175.8q0,8.31,4.45,13.06T64.61,256q7.71,0,12.32-4.9t4.6-12.91V117.27l50.78,94.14q3.57,6.84,7.72,9.8a16.42,16.42,0,0,0,9.8,3,15.87,15.87,0,0,0,9.8-3.12,29.53,29.53,0,0,0,7.73-9.65l50.3-95.28v79q0,14.55-5.55,21.68t-16.36,7.72l-8.44.59q-7.12.6-10.42,4.31t-3.3,10.84q0,16.64,20.32,15.73l8.44-.59q49.35-4.16,49.35-60.28V62.34Q251.7,53.73,247.08,48.53Z"/>
                  </svg>
                </g-link>
                <div class="-mr-2">
                  <button type="button" @click="toggleMenu"
                          class="bg-white dark:bg-rich-black transition-colors duration-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <g-link
                      to="/"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-prussian-blue text-gray-900 dark:text-gray-200"
                      exact-active-class="text-gray-100"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 dark:text-green-400 text-xl" :icon="['far', 'user']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Me
                    </span>
                  </g-link>

                  <g-link
                      to="/portfolio"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-prussian-blue text-gray-900 dark:text-gray-200"
                      exact-active-class="text-gray-100"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 dark:text-green-400 text-xl" :icon="['fab', 'github']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Portfolio
                    </span>
                  </g-link>
                </nav>
              </div>
            </div>
            <div class="py-4 px-5">
              <div class="flex items-center justify-end">
                <a href="https://github.com/MattJarman" target="_blank" class="flex items-center justify-center mr-3">
                  <font-awesome-icon class="w-6 h-6 text-2xl text-gray-400 hover:text-gray-500 dark:text-green-400 dark:hover:text-green-500" :icon="['fab', 'github']"/>
                </a>
                <theme-switcher class="w-6 h-6 text-gray-400 hover:text-gray-500 dark:text-green-400"/>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Navbar',
  mixins: [clickaway],
  components: { ThemeSwitcher },
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    hideMenu (e) {
      if (e.target.id === 'mobile-menu-button') {
        return
      }

      this.isMenuOpen = false
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
