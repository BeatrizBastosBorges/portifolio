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
  
        <section class="py-24 px-4 md:px-12 lg:px-20 w-full md:w-3/4 mx-auto">
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
                        Charles Eames
                    </p> 
                </div>
            </div>
        </section>
  
        <section id="projetos" class="py-24 px-4 md:px-12 lg:px-20 container mx-auto">
            <div class="flex items-center mb-10">
                <div class="flex items-center h-full">
                    <div class="text-3xl font-bold w-fit">
                        <span class="text-[#3DD9BC]">#</span>
                        projetos
                    </div>
                </div>
                
                <div class="h-0.5 bg-[#3DD9BC] flex-1 mx-4"></div>
                
                <div>
                    <NuxtLink to="/projetos" class="flex items-center hover:text-[#3DD9BC] transition-colors">
                        Veja todos 
                        <span class="ml-2">→</span>
                    </NuxtLink>
                </div>
            </div>
    
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="border border-[#ABB2BF]">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                        </div>
                </div>

                <div class="border border-[#ABB2BF]">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                        </div>
                </div>

                <div class="border border-[#ABB2BF]">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                        </div>
                </div>
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