<template>
    <div class="flex-grow overflow-hidden bg-[url(@/assets/image/background.svg)] bg-repeat font-fira">
        <div class="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-20 container mx-auto">
            <h1 class="text-3xl md:text-5xl font-bold mb-2 flex items-center">
                <span class="text-[#858BF2] mr-2">/</span>{{ $t('projects_title') }}
            </h1>
            <p class="text-[#ABB2BF] mb-12">{{ $t('projects_subtitle') }}</p>

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
                                class="inline-block px-4 py-2 border border-[#3DD9BC] text-white hover:bg-[#3DD9BC] hover:text-gray-900 transition-colors text-sm font-fira"
                            >
                                {{ $t('projects_detail_button') }} <~>
                            </NuxtLinkLocale>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-12">
                <button 
                    @click="currentPage--" 
                    :disabled="currentPage === 1"
                    class="px-4 py-2 border border-[#ABB2BF] text-[#ABB2BF] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#3DD9BC] hover:bg-[#3DD9BC]/50 hover:text-gray-900 transition-colors"
                >
                    <~ {{ $t('pagination_previous') }}
                </button>

                <div class="flex gap-2">
                    <button 
                        v-for="page in totalPages" 
                        :key="page"
                        @click="currentPage = page"
                        :class="[
                            'px-4 py-2 border transition-colors',
                            currentPage === page 
                                ? 'border-[#3DD9BC] text-white hover:bg-[#3DD9BC] hover:text-gray-900 font-semibold' 
                                : 'border-[#ABB2BF] text-[#ABB2BF] hover:border-[#3DD9BC] hover:bg-[#3DD9BC]/50 hover:text-gray-900'
                        ]"
                    >
                        {{ page }}
                    </button>
                </div>

                <button 
                    @click="currentPage++" 
                    :disabled="currentPage === totalPages"
                    class="px-4 py-2 border border-[#ABB2BF] text-[#ABB2BF] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#3DD9BC] hover:bg-[#3DD9BC]/50 hover:text-gray-900 transition-colors"
                >
                {{ $t('pagination_next') }} ~>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
    title: 'Beatriz | Projetos',
    meta: [ { name: 'description', content: 'Página de projetos da desenvolvedora web Beatriz.' } ],
})

const limit = 6;
const currentPage = ref(1);

const getSlug = (id: string | undefined) => {
    if (!id) return ''
    return id.split(':').pop()?.replace('.json', '') || ''
}

const { data: totalProjects } = await useAsyncData(`total-projects-${locale.value}`, () => 
    queryContent('projects', locale.value).count()
);

const totalPages = computed(() => Math.ceil((totalProjects.value || 0) / limit));

const { data: projects, refresh } = await useAsyncData(`projects-page${locale.value}`, () => {
    const skip = (currentPage.value - 1) * limit;
    return queryContent('projects', locale.value)
        .sort({ title: 1 })
        .skip(skip)
        .limit(limit)
        .find();
}, {
    watch: [currentPage, locale]
});
</script>