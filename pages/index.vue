<template>
    <div>
        <section id="inicio" class="py-24 px-4 md:px-12 lg:px-20 container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">       
                    <div>
                        <p class="text-2xl md:text-4xl font-semibold mb-8">
                            Sou uma <span class="text-[#858BF2]">desenvolvedora web</span>
                        </p>
                        
                        <p class="text-gray-400 text-lg mb-8 max-w-lg">
                            Transformo ideias em sistemas de alta perfomance.
                        </p>

                        <a href="#" class="inline-block px-6 py-3 border border-[#3DD9BC] hover:bg-[#3DD9BC] hover:text-gray-900 transition-colors font-medium">
                            Saiba mais!
                        </a>
                    </div>

                    <div class="hidden lg:flex justify-end relative">
                        <div class="w-full max-w-md h-80 flex items-center justify-center text-gray-400">
                            <img :src="meUrl" alt="Logo">
                        </div>
                    </div>
                </div>
        </section>
  
        <section class="py-16 px-4 md:px-12 lg:px-20 container mx-auto">
            <!-- <QuoteBlock /> -->
        </section>
  
        <section id="projetos" class="py-24 px-4 md:px-12 lg:px-20 container mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b border-green-500 w-fit pb-1">
                #projetos
            </h2>
            
            <div class="flex justify-end mb-8">
                <NuxtLink to="/projetos" class="flex items-center text-green-500 hover:text-white transition-colors">
                    Veja todos 
                    <span class="ml-2">→</span>
                </NuxtLink>
            </div>
    
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- <ProjectCard />
                <ProjectCard />
                <ProjectCard /> -->
            </div>
        </section>
  
    </div>
</template>
  
<script setup>
import meUrl from '../assets/image/me-sitting.svg'

useHead({
    title: 'Beatriz | Desenvolvedora Web',
    meta: [
        { name: 'description', content: 'Portfolio pessoal de uma desenvolvedora web.' }
    ]
})
</script>