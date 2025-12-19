<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
    <div class="min-h-screen flex- flex-col bg-[#121212] text-white">
        <AppHeader />

        <main class="flex-grow">
            <slot />
        </main>

        <AppFooter />

        <SpeedInsights />
    </div>
</template>
