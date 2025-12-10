<template>
    <div>
        <section id="inicio" class="py-24 px-4 md:px-12 lg:px-20 container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 justify-items-center">       
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

                    <div class="lg:flex justify-center lg:justify-end relative">
                        <div class="w-full max-w-md h-80 flex items-center justify-center text-gray-400">
                            <img :src="meUrl" alt="Logo">
                        </div>
                    </div>
                </div>
        </section>
  
        <section class="py-24 px-4 md:px-12 lg:px-20 mb-20 md:mb-32 w-full md:w-3/4 mx-auto">
            <div class="relative mx-auto p-0 border border-[#ABB2BF] bg-[#121212]">
                <span class="absolute -top-3 left-5 text-4xl leading-none text-[#ABB2BF] z-10 bg-[#121212] px-1">“</span>

                <div class="p-8 md:p-10 lg:p-12">
                    <p class="text-xl md:text-2xl italic">
                        O design não está apenas no que se vê, mas no que se sente.
                    </p>
                </div>

                <span class="absolute -bottom-6 right-5 text-4xl leading-none text-[#ABB2BF] z-10 bg-[#121212] px-1">“</span>
            </div>

            <div class="flex">
                <div class="flex flex-col self-end w-fit p-0 border border-[#ABB2BF] bg-[#121212] ml-auto">
                    <p class="text-xl md:text-2xl italic p-8 md:p-10 lg:p-12">
                        Charkes Eames
                    </p> 
                </div>
            </div>
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