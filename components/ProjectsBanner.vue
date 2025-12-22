<template>
    <div class="py-12 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20 container mx-auto">
        <div class="flex flex-col md:flex-row items-start md:items-center mb-10">
            <div class="flex items-center h-full">
                <div class="text-xl md:text-2xl lg:text-3xl font-bold w-fit">
                    <span class="text-[#3DD9BC]">#</span>
                    {{ $t('projects_title') }}
                </div>
            </div>

            <div class="h-0.5 bg-[#3DD9BC] flex-1 mx-4"></div>

            <div>
                <NuxtLinkLocale to="/projects" class="flex items-center hover:text-[#3DD9BC] transition-colors">
                    {{ $t('projects_view_button') }}
                    <span class="ml-2">~~></span>
                </NuxtLinkLocale>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div 
                v-for="project in projects" 
                :key="project._path"
                class="bg-[#121212]/75 border border-[#ABB2BF] flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl odd:hover:shadow-[#858BF2]/50 even:hover:shadow-[#3DD9BC]/50"
            >

                <img :src="project.image" :alt="project.title" class="aspect-square w-full object-cover border-b border-[#ABB2BF]" />

                <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4 text-sm">
                    {{ project.tags.join(' ') }}
                </div>

                <div class="flex flex-col flex-grow p-4">
                    <div class="flex-grow mb-6">
                        <h3 class="text-lg font-semibold mb-2 text-white">{{ project.title }}</h3>
                        <p class="text-[#ABB2BF] text-sm leading-relaxed line-clamp-3">
                            {{ project.description }}
                        </p>
                    </div>

                    <div class="mt-auto">
                        <NuxtLinkLocale 
                            :to="localePath(`/projects/${getSlug(project._id)}`)"
                            class="inline-block px-4 py-2 border border-[#3DD9BC] text-[#3DD9BC] hover:bg-[#3DD9BC]/10 transition-colors text-sm font-fira"
                        >
                            {{ $t('projects_detail_button') }} <~>
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const getSlug = (id: string | undefined) => {
    if (!id) return ''
    return id.split(':').pop()?.replace('.json', '') || ''
}

const { data: projects } = await useAsyncData(`home-projects-${locale.value}`, () =>
    queryContent('projects', locale.value)
        .sort({ title: 1 })
        .limit(3)
        .find(),
    {
        watch: [locale]
    }
)
</script>