<template>
    <div class="py-12 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20 mx-auto">
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
    </div>
</template>