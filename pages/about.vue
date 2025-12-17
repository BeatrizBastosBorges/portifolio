<template>
    <div class="flex-grow overflow-hidden bg-[url(@/assets/image/background.svg)] bg-repeat">
        <div class="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-20 container mx-auto">
            <h1 class="text-3xl md:text-5xl font-bold mb-2 flex items-center">
                <span class="text-[#858BF2] mr-2">/</span>sobre-mim
            </h1>
            <p class="text-[#ABB2BF] mb-12 lg:mb-6">Quem sou eu?</p>
            
            <div class="grid lg:grid-cols-2 gap-12 justify-items-center items-center">
                <div class="flex flex-col gap-6 text-justify bg-[#121212]/70 rounded">
                    <p class="text-[#ABB2BF]">Olá, sou a Beatriz!</p>

                    <p class="text-[#ABB2BF]">Sou uma Tecnóloga em Análise e Desenvolvimento de Sistemas formada, com foco e entusiasmo pelas áreas front-end e back-end. Estou sediada em Praia Grande - São Paulo.</p>

                    <p class="text-[#ABB2BF]">Minha paixão é transformar ideias em sistemas de alta performance, desenvolvendo interfaces web modernas, responsivas e acessíveis, além de garantir a otimização de rotinas e processos internos.</p>
                    
                    <a :href="curriculo" download="Curriculo_Beatriz_Bastos_Borges.pdf" class="w-fit px-6 py-3 border border-[#3DD9BC] hover:bg-[#3DD9BC] hover:text-gray-900 transition-colors font-medium mt-4">
                        Veja meu Currículo!
                    </a>
                </div>

                <div class="lg:flex justify-center lg:justify-end">
                    <div class="w-full max-w-md flex items-center justify-center text-[#ABB2BF]">
                        <img :src="meUrl" alt="Beatriz Bastos Borges" />
                    </div>
                </div>
            </div>

            <section id="skills" class="mt-6 py-12">
                <div class="flex items-center mb-10">
                    <div class="flex items-center h-full">
                        <div class="text-3xl font-bold w-fit">
                            <span class="text-[#3DD9BC]">#</span>
                            skills
                        </div>
                    </div>
                    
                    <div class="h-0.5 bg-[#3DD9BC] flex-1 ml-4"></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                    <img :src="star" alt="Estrelas" class="hidden lg:block w-64" />
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div v-for="skill in skills" :key="skill.category" class="border border-[#ABB2BF] bg-[#121212]/75">
                            <h3 class="p-2 border-b border-[#ABB2BF] text-lg font-semibold text-white">{{skill.category}}</h3>
                            <div class="flex flex-wrap p-2 text-[#ABB2BF] text-sm gap-x-4">
                                <span v-for="item in skill.items">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import meUrl from '@/assets/image/me-standing.svg'
import star from '@/assets/image/logo2.svg'
import curriculo from '@/assets/doc/curriculo.pdf'

useHead({
    title: 'Beatriz | Sobre-mim',
    meta: [
        { name: 'description', content: 'Página sobre mim da desenvolvedora web Beatriz.' }
    ],
})

const skills = [
    {
        category: 'Linguagens',
        items: ['TypeScript', 'C#', 'C++', 'Python', 'JavaScript', 'Java']
    },
    {
        category: 'Databases',
        items: ['SQL Server', 'MySQL', 'Mongo']
    },
    {
        category: 'Frameworks',
        items: ['React', 'Vue', 'Nuxt', 'Express']
    },
    {
        category: 'Tools',
        items: ['VSCode', 'Eclipse', 'Git', 'Github', 'GitLab', 'VisualStudio']
    },
    {
        category: 'Other',
        items: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS']
    }
]
</script>