<template>
    <header class="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md shadow-md">
        <div class="container mx-auto px-4 md:px-12 lg:px-20 py-4 flex justify-between items-center">
  
            <div class="text-lg font-bold flex items-center">
                <img :src="logoUrl" alt="Logo" class="h-8 w-auto">
                Beatriz
            </div>
  
            <nav class="hidden md:flex space-x-6 text-sm">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" 
                            class="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span class="text-[#3DD9BC] mr-1">#</span>{{ link.label }}
                </NuxtLink>
        
                <!-- <div class="flex items-center ml-4 border-l border-gray-700 pl-4">
                    <span class="text-sm text-gray-400">PT-BR ▾</span>
                </div> -->
            </nav>
        </div>
    </header>
</template>
  
<script setup>
import logoUrl from '../assets/image/logo.svg'

const navLinks = [
    { label: 'início', to: '#inicio' },
    { label: 'projetos', to: '#projetos' },
    { label: 'sobre-mim', to: '#sobre-mim' },
    { label: 'contatos', to: '#contatos' },
]
</script>