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
useHead({
    title: 'Beatriz | Desenvolvedora Web',
    meta: [
        { name: 'description', content: 'Portfolio pessoal de uma desenvolvedora web.' }
    ]
})
</script>