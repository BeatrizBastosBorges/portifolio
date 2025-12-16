<template>
    <header class="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md shadow-md">
        <div class="container mx-auto px-4 md:px-12 lg:px-20 py-4 flex justify-between items-center text-white">
 
            <NuxtLink class="text-lg font-bold flex items-center z-50" to="/">
                <img :src="logoUrl" alt="Logo" class="h-8 w-auto mr-2">
                Beatriz
            </NuxtLink>
 
            <nav class="hidden md:flex space-x-6 text-sm">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span class="text-[#3DD9BC] mr-1">#</span>{{ link.label }}
                </NuxtLink>

                <!-- <div class="hidden md:flex items-center ml-4 border-l border-gray-700 pl-4">
                    <span class="text-xl text-[#ABB2BF] font-semibold">PT-BR ▾</span>
                </div> -->
            </nav>

            <div class="md:hidden flex items-center p-2 z-50">
                <input 
                    hidden 
                    class="check-icon" 
                    id="check-icon" 
                    name="check-icon" 
                    type="checkbox" 
                    v-model="isMenuOpen"
                >
                
                <label class="icon-menu" for="check-icon">
                    <div class="bar bar--1"></div>
                    <div class="bar bar--2"></div>
                    <div class="bar bar--3"></div>
                </label>
            </div>

            <transition enter-active-class="transition-all duration-300 ease-in-out"
                        enter-from-class="max-h-0 opacity-0"
                        enter-to-class="max-h-screen opacity-100"
                        leave-active-class="transition-all duration-300 ease-in-out"
                        leave-from-class="max-h-screen opacity-100"
                        leave-to-class="max-h-0 opacity-0">
                
                <nav v-show="isMenuOpen" class="md:hidden absolute top-0 left-0 w-full h-screen bg-[#121212] z-40 flex flex-col pt-20 px-4">
                    
                    <NuxtLink v-for="link in navLinks" 
                       :key="link.to" 
                       :to="link.to" 
                       @click="isMenuOpen = false"
                       class="py-4 text-2xl font-semibold text-white hover:text-[#3DD9BC] transition-colors flex items-center">
                        <span class="text-[#3DD9BC] mr-2 text-3xl">#</span>{{ link.label }}
                    </NuxtLink>
    
                    <!-- <div class="mt-8 pt-4">
                        <span class="text-xl text-[#ABB2BF] font-semibold">PT-BR ▾</span>
                    </div> -->
                </nav>
            </transition>
        </div>
    </header>
</template>
 
<script setup>
import { ref } from 'vue';
import logoUrl from '../assets/image/logo.svg'

const isMenuOpen = ref(false);

const navLinks = [
    { label: 'início', to: '/' },
    { label: 'projetos', to: '#projetos' },
    { label: 'sobre-mim', to: '#sobre-mim' },
    { label: 'contatos', to: '/contacts' },
]
</script>

<style scoped>
    .icon-menu {
       --gap: 5px;
       --height-bar: 2.5px;
       --pos-y-bar-one: 0;
       --pos-y-bar-three: 0;
       --scale-bar: 1;
       --rotate-bar-one: 0;
       --rotate-bar-three: 0;
       width: 25px;
       display: flex;
       flex-direction: column;
       gap: var(--gap);
       cursor: pointer;
       position: relative;
    }

    .bar {
       position: relative;
       height: var(--height-bar);
       width: 100%;
       border-radius: .5rem;
       background-color: #FFFFFF; 
    }
   
    .bar--1 {
       top: var(--pos-y-bar-one);
       transform: rotate(var(--rotate-bar-one));
       transition: top 200ms 100ms, transform 100ms;
    }
   
    .bar--2 {
       transform: scaleX(var(--scale-bar));
       transition: transform 150ms 100ms;
    }
   
    .bar--3 {
       bottom: var(--pos-y-bar-three);
       transform: rotate(var(--rotate-bar-three));
       transition: bottom 200ms 100ms, transform 100ms;
    }
   
    .check-icon:checked + .icon-menu > .bar--1 {
       transition: top 200ms, transform 200ms 100ms;
    }
   
    .check-icon:checked + .icon-menu > .bar--3 {
       transition: bottom 200ms, transform 200ms 100ms;
    }
   
    .check-icon:checked + .icon-menu {
       --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
       --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
       --scale-bar: 0;
       --rotate-bar-one: 45deg;
       --rotate-bar-three: -45deg;
    }
</style>