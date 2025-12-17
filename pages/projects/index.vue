<template>
    <div class="flex-grow overflow-hidden bg-[url(@/assets/image/background.svg)] bg-repeat">
        <div class="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-20 container mx-auto">
            <h1 class="text-3xl md:text-5xl font-bold mb-2 flex items-center">
                <span class="text-[#858BF2] mr-2">/</span>projetos
            </h1>
            <p class="text-[#ABB2BF] mb-12">Lista dos meus projetos</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#858BF2]/50">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                    </div>
                </div>

                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3DD9BC]/50">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                    </div>
                </div>

                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#858BF2]/50">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                    </div>
                </div>

                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3DD9BC]/50">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                    </div>
                </div>

                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#858BF2]/50">
                    <div class="h-48 bg-[#ABB2BF]"></div>
                    <div class="border-b border-[#ABB2BF] text-[#ABB2BF] p-4">
                        HTML CSS
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Projeto</h3>
                        <p class="text-[#ABB2BF]">Descrição breve do projeto exemplo 1.</p>
                    </div>
                </div>

                <div class="bg-[#121212]/75 border border-[#ABB2BF] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3DD9BC]/50">
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
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Beatriz | Projetos',
    meta: [
        { name: 'description', content: 'Página de projetos da desenvolvedora web Beatriz.' }
    ],
})
</script>