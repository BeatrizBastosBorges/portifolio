<template>
    <div>
        <section id="inicio" class="py-24 px-4 md:px-12 lg:px-20 container mx-auto">
            <!-- <HeroSection />  -->
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
useHead({
    title: 'Beatriz | Desenvolvedora Web',
    meta: [
        { name: 'description', content: 'Portfolio pessoal de uma desenvolvedora web.' }
    ]
})
</script>