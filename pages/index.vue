<template>
    <div class="flex-grow overflow-hidden">
        <HeroBanner />
    
        <div class="bg-[url(@/assets/image/background.svg)] bg-repeat">
            <QuoteBanner />

            <ProjectsBanner/>
        </div>
    </div>
</template>
  
<script setup>
const { t } = useI18n()

useHead({
    title: computed(() => `Beatriz | ${t('hero_role')}`),
    meta: [
        { name: 'description', content: computed(() => t('hero_description')) }
    ]
})
</script>