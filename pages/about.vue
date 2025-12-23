<template>
    <div class="flex-grow overflow-hidden bg-[url(@/assets/image/background.svg)] bg-repeat">
        <div class="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-20 container mx-auto">
            <h1 class="text-3xl md:text-5xl font-bold mb-2 flex items-center">
                <span class="text-[#858BF2] mr-2">/</span>{{ $t('about_title') }}
            </h1>
            <p class="text-[#ABB2BF] mb-12 lg:mb-6">{{ $t('about_subtitle') }}</p>
            
            <div class="grid lg:grid-cols-2 gap-12 justify-items-center items-center">
                <div class="flex flex-col gap-6 text-justify bg-[#121212]/70 rounded">
                    <p class="text-[#ABB2BF]">{{ $t('about_description_1') }}</p>
                    <p class="text-[#ABB2BF]">{{ $t('about_description_2') }}</p>
                    <p class="text-[#ABB2BF]">{{ $t('about_description_3') }}</p>

                    <a 
                        :href="curriculo" 
                        :download="nomeAquivo" 
                        class="w-fit px-6 py-3 border border-[#3DD9BC] hover:bg-[#3DD9BC] hover:text-gray-900 transition-colors font-medium mt-4"
                    >
                        {{ $t('about_button') }}
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
                            <span class="text-[#3DD9BC]">#</span>{{ $t('about_skills_title') }}
                        </div>
                    </div>
                    
                    <div class="h-0.5 bg-[#3DD9BC] flex-1 ml-4"></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                    <img :src="star" alt="Estrelas" class="hidden lg:block w-64" />
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div
                            v-for="skill in translatedSkills" 
                            :key="skill.category" 
                            class="border border-[#ABB2BF] bg-[#121212]/75"
                        >
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
import curriculoPT from '@/assets/doc/curriculo_pt.pdf'
import curriculoEN from '@/assets/doc/curriculo_en.pdf'

const { t, locale } = useI18n()

const curriculo = computed(() => {
    return locale.value.startsWith('pt') ? curriculoPT : curriculoEN
})

const nomeAquivo = computed(() => {
    return locale.value.startsWith('pt') ? 'Curriculo_Beatriz_Bastos_Borges.pdf' : 'Beatriz_Bastos_Borges_Resume.pdf'
})

useHead({
    title: computed(() => `Beatriz | ${t('about_title')}`),
    meta: [{ name: 'description', content: computed(() => t('about_subtitle')) }],
})

const translatedSkills = computed(() => [
    {
        category: t('categories_languages'),
        items: ['TypeScript', 'C#', 'C++', 'Python', 'JavaScript', 'Java']
    },
    {
        category: t('categories_databases'),
        items: ['SQL Server', 'MySQL', 'Mongo']
    },
    {
        category: t('categories_frameworks'),
        items: ['React', 'Vue', 'Nuxt', 'Express']
    },
    {
        category: t('categories_tools'),
        items: ['VSCode', 'Eclipse', 'Git', 'Github', 'GitLab', 'VisualStudio']
    },
    {
        category: t('categories_other'),
        items: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS']
    }
])
</script>