<template>
    <div class="flex-grow overflow-hidden">
        <main>
            <HeroBanner />
        
            <div class="bg-[url(@/assets/image/background.svg)] bg-repeat">
                <QuoteBanner />

                <ProjectsBanner/>
            </div>
        </main>
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