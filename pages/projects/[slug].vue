<template>
  <main class="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-20 container mx-auto font-fira text-[#ABB2BF]">
    <ContentDoc :path="`projects/${locale}/${$route.params.slug}`"v-slot="{ doc }">
      <article>
        <h1 class="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-2">
          <span class="text-[#858BF2]">/</span>{{ doc.title }}
        </h1>
        <p class="mb-12 text-[#ABB2BF]">{{ doc.description }}</p>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <img :src="doc.image" :alt="doc.title" class="w-full" />

          <div class="prose prose-invert max-w-none text-justify">
            <h2 class="text-white text-xl md:text-2xl font-bold mb-4">
              <span class="text-[#3DD9BC]">#</span> {{ $t('projects.about') }}
            </h2>
            <p>{{ doc.about }}</p>

            <h3 class="text-white text-xl md:text-2xl font-semibold mt-4 mb-2">
              <span class="text-[#3DD9BC]">#</span> {{ $t('projects.my_contribution') }}:
            </h3>
            
            <ul class="list-disc ml-6 mb-4">
              <li v-for="con in doc.contributions" :key="con.item" class="mb-2">
                <strong class="text-white">{{ con.item }}:</strong> {{ con.text }}
                <ul v-if="con.subitems" class="list-[circle] ml-6 mt-2">
                  <li v-for="sub in con.subitems" :key="sub">{{ sub }}</li>
                </ul>
              </li>
            </ul>

            <div class="mt-8 flex gap-4">
              <a v-if="doc.link" :href="doc.link" target="_blank"
                class="px-6 py-2 border border-[#3DD9BC] text-[#3DD9BC] hover:bg-[#3DD9BC]/10 transition-colors">
                {{ $t('projects.project_link') }}
              </a>
            </div>
          </div>
        </div>
      </article>
    </ContentDoc>
  </main>
</template>

<script setup>
  const { locale } = useI18n()
</script>