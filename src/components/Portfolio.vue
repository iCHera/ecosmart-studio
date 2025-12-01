<template>
  <section id="portfolio">
    <div class="container">
      <span class="section-label" v-animate>{{ t.portfolio.label }}</span>
      <h3 class="section-title" v-animate>{{ t.portfolio.title }}</h3>

      <div class="grid">
        <div 
          v-for="(item, index) in t.portfolio.items" 
          :key="index" 
          class="project"
          v-animate
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="img-wrap">
            <img :src="images[index]" alt="Project" />
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <a href="#" class="link">{{ t.portfolio.link }} &rarr;</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useLanguage } from '../composables/useLanguage';
  const { t } = useLanguage();
  
  const images = [
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800&auto=format&fit=crop'
  ];
</script>

<style scoped>
.section-title { font-size: 40px; margin-bottom: 60px; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.img-wrap {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  aspect-ratio: 4/3;
  border: 1px solid var(--border-color);
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project:hover img { transform: scale(1.05); }

.project h4 { font-size: 20px; margin-bottom: 8px; }
.project p { color: var(--text-secondary); margin-bottom: 16px; }
.link { font-size: 14px; font-weight: 600; border-bottom: 1px solid rgba(0,0,0,0.2); padding-bottom: 2px; }
.link:hover { border-color: var(--text-primary); }
</style>