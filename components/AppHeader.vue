<template>
    <header class="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md shadow-md">
        <div class="container mx-auto px-4 md:px-12 lg:px-20 py-4 flex justify-between items-center text-white">

            <NuxtLinkLocale class="text-lg font-bold flex items-center z-50" to="/">
                <img :src="logoUrl" alt="Logo" class="h-8 w-auto mr-2">
                Beatriz
            </NuxtLinkLocale>

            <nav class="hidden md:flex space-x-6 text-sm items-center">
                <NuxtLinkLocale v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span class="text-[#3DD9BC] mr-1">#</span>{{ link.label }}
                </NuxtLinkLocale>

                <div class="flex items-center ml-4 border-l border-gray-700 pl-4 space-x-2">
                    <button 
                        v-for="lang in locales" 
                        :key="lang.code"
                        @click="setLocale(lang.code)"
                        class="transition-colors uppercase font-bold text-xs"
                        :class="locale === lang.code ? 'text-[#3DD9BC]' : 'text-gray-500 hover:text-white'"
                    >
                        {{ lang.code }}
                    </button>
                </div>
            </nav>

            <div class="md:hidden flex items-center p-2 z-50">
                <input hidden class="check-icon" id="check-icon" name="check-icon" type="checkbox" v-model="isMenuOpen">
                <label class="icon-menu" for="check-icon">
                    <div class="bar bar--1"></div>
                    <div class="bar bar--2"></div>
                    <div class="bar bar--3"></div>
                </label>
            </div>

            <transition enter-active-class="transition-all duration-300 ease-in-out"
                enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-screen opacity-100"
                leave-active-class="transition-all duration-300 ease-in-out" leave-from-class="max-h-screen opacity-100"
                leave-to-class="max-h-0 opacity-0">

                <nav v-show="isMenuOpen"
                    class="md:hidden absolute top-0 left-0 w-full h-screen bg-[#121212] z-40 flex flex-col pt-20 px-4">

                    <NuxtLinkLocale v-for="link in navLinks" :key="link.to" :to="link.to" @click="isMenuOpen = false"
                        class="py-4 text-2xl font-semibold text-white hover:text-[#3DD9BC] transition-colors flex items-center">
                        <span class="text-[#3DD9BC] mr-2 text-3xl">#</span>{{ link.label }}
                    </NuxtLinkLocale>

                    <div class="mt-8 pt-4 flex space-x-6 border-t border-gray-800">
                        <button 
                            v-for="lang in locales" 
                            :key="lang.code"
                            @click="() => { setLocale(lang.code); isMenuOpen = false; }"
                            class="text-xl font-bold uppercase"
                            :class="locale === lang.code ? 'text-[#3DD9BC]' : 'text-gray-500'"
                        >
                            {{ lang.code }}
                        </button>
                    </div>
                </nav>
            </transition>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import logoUrl from '../assets/image/logo.svg'

const { locale, locales, t, setLocale } = useI18n()

const isMenuOpen = ref(false);

const navLinks = computed(() => [
    { label: t('nav_home'), to: '/' },
    { label: t('nav_projects'), to: '/projects' },
    { label: t('nav_about'), to: '/about' },
    { label: t('nav_contacts'), to: '/contacts' },
])
</script>

<style scoped>
/* Mantive seu estilo original do menu hamburguer */
.icon-menu {
    --gap: 5px;
    --height-bar: 2.5px;
    width: 25px;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    cursor: pointer;
    position: relative;
}
.bar {
    height: var(--height-bar);
    width: 100%;
    border-radius: .5rem;
    background-color: #FFFFFF;
}
/* ... resto dos seus estilos .bar--1, .check-icon etc ... */
.bar--1 { top: var(--pos-y-bar-one); transform: rotate(var(--rotate-bar-one)); transition: top 200ms 100ms, transform 100ms; }
.bar--2 { transform: scaleX(var(--scale-bar)); transition: transform 150ms 100ms; }
.bar--3 { bottom: var(--pos-y-bar-three); transform: rotate(var(--rotate-bar-three)); transition: bottom 200ms 100ms, transform 100ms; }
.check-icon:checked+.icon-menu>.bar--1 { transition: top 200ms, transform 200ms 100ms; }
.check-icon:checked+.icon-menu>.bar--3 { transition: bottom 200ms, transform 200ms 100ms; }
.check-icon:checked+.icon-menu {
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
}
</style>