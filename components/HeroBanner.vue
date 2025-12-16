<template>
    <div id="inicio" class="py-12 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20 mx-auto container mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 justify-items-center">
            <div>
                <p class="text-2xl md:text-4xl font-semibold mb-8">
                    Sou uma <span class="text-[#858BF2]">desenvolvedora web</span>
                </p>

                <p class="text-[#ABB2BF] text-lg mb-8 max-w-lg">
                    Transformo ideias em sistemas de alta perfomance.
                </p>

                <a href="#"
                    class="inline-block px-6 py-3 border border-[#3DD9BC] hover:bg-[#3DD9BC] hover:text-gray-900 transition-colors font-medium">
                    Saiba mais!
                </a>
            </div>

            <div class="lg:flex justify-center lg:justify-end relative">
                <div class="w-full max-w-md h-80 flex items-center justify-center text-[#ABB2BF]">
                    <img :src="meUrl" alt="Logo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import meUrl from '@/assets/image/me-sitting.svg'
</script>