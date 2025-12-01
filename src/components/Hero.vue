<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 v-animate>{{ t.hero.title }}</h1>
        <p class="subtitle" v-animate.delay-100>{{ t.hero.subtitle }}</p>
        <div class="buttons" v-animate.delay-200>
          <a href="#contact" class="btn btn-primary">
            {{ t.hero.btn_primary }}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#portfolio" class="btn btn-outline">{{ t.hero.btn_secondary }}</a>
        </div>
      </div>

      <div class="mission-block" v-animate.delay-300>
        <div class="mission-grid">
          <h2>{{ t.hero.mission_title }}</h2>
          <p>{{ t.hero.mission_text }}</p>
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
.hero {
  padding-top: 160px;
  padding-bottom: 80px;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 120px;
}

h1 {
  font-size: 64px;
  margin-bottom: 24px;
  background: linear-gradient(to right, #171717, #666); 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.mission-block {
  border-top: 1px solid var(--border-color);
  padding-top: 80px;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.mission-grid h2 { font-size: 32px; }
.mission-grid p { color: var(--text-secondary); font-size: 18px; }

@media (max-width: 768px) {
  h1 { font-size: 40px; }
  .mission-grid { grid-template-columns: 1fr; gap: 30px; }
  .buttons { flex-direction: column; }
}
</style>