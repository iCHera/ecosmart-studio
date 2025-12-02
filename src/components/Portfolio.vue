<template>
  <section id="portfolio">
    <div class="container">
      <span class="section-label" v-animate>{{ t.portfolio.label }}</span>
      <h3 class="section-title" v-animate>{{ t.portfolio.title }}</h3>

      <div class="grid">
        <router-link 
          v-for="(item, index) in t.portfolio.items" 
          :key="index" 
          :to="{ name: 'project', params: { id: item.id } }"
          class="project"
          v-animate
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="img-wrap">
            <img :src="item.image" :alt="item.title" />
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span class="link">
            {{ t.portfolio.link }} 
            <span class="arrow">&rarr;</span>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useLanguage } from '../composables/useLanguage';
  const { t } = useLanguage();
</script>

<style scoped>
.section-title { font-size: 40px; margin-bottom: 60px; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.project {
  display: block;
  cursor: pointer;
}

.img-wrap {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  aspect-ratio: 4/3;
  background-color: transparent;
  transform: translateZ(0);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  transition: transform 0.6s ease;
}

.project:hover img { transform: scale(1.06); }

.project h4 { font-size: 20px; margin-bottom: 8px; color: var(--text-primary); }
.project p { color: var(--text-secondary); margin-bottom: 16px; }

.link { 
  font-size: 14px; 
  font-weight: 600; 
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 6px; 
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease; 
}

.project:hover .arrow {
  transform: translateX(6px); 
}

@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
}
</style>