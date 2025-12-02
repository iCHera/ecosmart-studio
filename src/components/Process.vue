<template>
  <section id="process">
    <div class="container">
      <div class="process-box" v-animate>
        <div class="header">
          <span class="section-label">{{ t.process.label }}</span>
          <h3 class="section-title">{{ t.process.title }}</h3>
        </div>

        <div class="timeline">
          <div 
            v-for="(item, index) in t.process.items" 
            :key="item.id" 
            class="step"
            v-animate
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <span class="number">{{ item.id }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useLanguage } from '../composables/useLanguage';
  const { t } = useLanguage();
</script>

<style scoped>
.process-box {
  background: var(--surface-color); /* Исправлено под светлую тему */
  border: 1px solid var(--border-color);
  border-radius: 32px;
  padding: 60px;
}

.header { text-align: center; margin-bottom: 60px; }
.section-title { font-size: 40px; }

.timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.step {
  border-left: 1px solid var(--border-color);
  padding-left: 24px;
  position: relative;
}

.number {
  position: absolute;
  top: -12px;
  left: -10px;
  background: var(--surface-color); 
  border: 1px solid var(--border-color);
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  color: var(--text-secondary);
}

.step h4 { font-size: 18px; margin-bottom: 8px; margin-top: 8px; }
.step p { color: var(--text-secondary); font-size: 14px; }

@media (max-width: 640px) {
  .timeline {
    grid-template-columns: 1fr; 
  }
}
</style>