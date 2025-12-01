<template>
  <section id="services">
    <div class="container">
      <span class="section-label" v-animate>{{ t.services.label }}</span>
      <h3 class="section-title" v-animate>{{ t.services.title }}</h3>

      <div class="grid">
        <div 
          v-for="(item, index) in t.services.items" 
          :key="index" 
          class="card"
          v-animate
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- :style выше делает так, что карточки появляются одна за другой -->
          <div class="icon-wrapper" v-html="icons[index]"></div>
          
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();

const icons = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"></path><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>`
];
</script>

<style scoped>
.section-title { font-size: 40px; margin-bottom: 60px; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  padding: 40px;
  border-radius: 20px;
  transition: border-color 0.3s ease;
}

.card:hover {
  border-color: rgba(0, 0, 0, 0.2); /* Подправил под светлую тему */
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.icon-wrapper :deep(svg) {
  width: 100%;
  height: 100%;
}

.card h4 { font-size: 24px; margin-bottom: 12px; }
.card p { color: var(--text-secondary); font-size: 16px; }

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
</style>