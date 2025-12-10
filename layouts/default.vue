<template>
    <div class="min-h-screen flex- flex-col bg-[#121212] text-white">
        <AppHeader />

        <main class="flex-grow">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>