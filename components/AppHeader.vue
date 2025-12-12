<template>
    <header class="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md shadow-md">
        <div class="container mx-auto px-4 md:px-12 lg:px-20 py-4 flex justify-between items-center text-white">
 
            <div class="text-lg font-bold flex items-center z-50">
                <img :src="logoUrl" alt="Logo" class="h-8 w-auto mr-2">
                Beatriz
            </div>
 
            <nav class="hidden md:flex space-x-6 text-sm">
                <a v-for="link in navLinks" :key="link.to" :href="link.to"
                    class="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span class="text-[#3DD9BC] mr-1">#</span>{{ link.label }}
                </a>

                <!-- <div class="hidden md:flex items-center ml-4 border-l border-gray-700 pl-4">
                    <span class="text-sm text-gray-400">PT-BR ▾</span>
                </div> -->
            </nav>
            
            <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 z-50 focus:outline-none">
                <svg v-if="!isMenuOpen" class="w-6 h-6 text-[#3DD9BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg v-else class="w-6 h-6 text-[#3DD9BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

        </div>

        <transition enter-active-class="transition-all duration-300 ease-in-out"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-screen opacity-100"
                    leave-active-class="transition-all duration-300 ease-in-out"
                    leave-from-class="max-h-screen opacity-100"
                    leave-to-class="max-h-0 opacity-0">
            
            <nav v-show="isMenuOpen" class="md:hidden absolute top-0 left-0 w-full h-screen bg-[#121212] z-40 flex flex-col pt-20 px-4">
                
                <a v-for="link in navLinks" 
                   :key="link.to" 
                   :href="link.to" 
                   @click="isMenuOpen = false"
                   class="py-4 text-2xl font-semibold text-white hover:text-[#3DD9BC] transition-colors flex items-center">
                    <span class="text-[#3DD9BC] mr-2 text-3xl">#</span>{{ link.label }}
                </a>

                <!-- <div class="mt-8 pt-4">
                    <span class="text-xl text-gray-400 font-semibold">PT-BR ▾</span>
                </div> -->
            </nav>
        </transition>

    </header>
</template>
 
<script setup>
import { ref } from 'vue';
import logoUrl from '../assets/image/logo.svg'

const isMenuOpen = ref(false);

const navLinks = [
    { label: 'início', to: '#inicio' },
    { label: 'projetos', to: '#projetos' },
    { label: 'sobre-mim', to: '#sobre-mim' },
    { label: 'contatos', to: '#contatos' },
]
</script>