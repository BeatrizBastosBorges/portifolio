<template>
    <div class="py-12 md:py-20 lg:py-24 px-4 md:px-12 lg:px-20 w-3/4 container mx-auto">
        <div class="relative mx-auto p-0 border border-[#ABB2BF] bg-[#121212]">
            <span class="absolute -top-3 left-5 text-4xl leading-none text-[#ABB2BF] z-10 bg-[#121212] px-1">“</span>

            <div class="p-8 md:p-10 lg:p-12">
                <p class="text-xl md:text-2xl italic">
                    {{ $t('quote') }}
                </p>
            </div>

            <span
                class="absolute -bottom-6 right-5 text-4xl leading-none text-[#ABB2BF] z-10 bg-[#121212] px-1">“</span>
        </div>

        <div class="flex">
            <div class="flex flex-col self-end w-fit p-0 border border-[#ABB2BF] bg-[#121212] ml-auto">
                <p class="text-xl md:text-2xl italic p-8 md:p-10 lg:p-12">
                    Charles Eames
                </p>
            </div>
        </div>
    </div>
</template>