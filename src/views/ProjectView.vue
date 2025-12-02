<template>
  <div class="project-page" v-if="project">
    <div class="container">

      <router-link to="/" class="back-link">
        &larr; {{ currentLang === 'en' ? 'Back to Home' : 'На главную' }}
      </router-link>

      <div class="project-header">
        <h1 v-animate>{{ project.title }}</h1>
        <div class="main-image" v-animate.delay-100>
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>

      <div class="project-content">

        <div class="details-col" v-animate.delay-200>
          <div class="detail-item">
            <span class="label">Client</span>
            <p>{{ project.details.client }}</p>
          </div>
          <div class="detail-item">
            <span class="label">Area</span>
            <p>{{ project.details.area }}</p>
          </div>
          <div class="detail-item">
            <span class="label">Year</span>
            <p>{{ project.details.year }}</p>
          </div>
        </div>

        <div class="desc-col" v-animate.delay-300>
          <h3>About Project</h3>
          <p>{{ project.fullDesc }}</p>
          
          <router-link to="/#contact" class="btn btn-primary mt-8">
            {{ currentLang === 'en' ? 'Discuss similar project' : 'Обсудить похожий проект' }}
          </router-link>
        </div>

      </div>

    </div>
  </div>

  <div v-else class="container not-found">
    <h1>Project not found</h1>
    <router-link to="/" class="btn btn-primary">Go Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '../composables/useLanguage';

const route = useRoute();
const { t, currentLang } = useLanguage();

const project = computed(() => {
  const id = route.params.id;
  return t.value.portfolio.items.find((p: any) => p.id === id);
});
</script>

<style scoped>
.project-page {
  padding-top: 120px;
  padding-bottom: 30px;
  min-height: 100vh;
}

.back-link {
  display: inline-block;
  margin-bottom: 40px;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s;
}
.back-link:hover { color: var(--text-primary); }

h1 {
  font-size: 56px;
  margin-bottom: 40px;
}

.main-image {
  width: 100%;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 80px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
    transform: scale(1.01);
}

.project-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}

.detail-item {
  margin-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.label {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.detail-item p {
  font-size: 18px;
  font-weight: 600;
}

.desc-col h3 {
  font-size: 32px;
  margin-bottom: 20px;
}

.desc-col p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.mt-8 { margin-top: 32px; }

.not-found {
  padding-top: 200px;
  text-align: center;
}

@media (max-width: 1024px) {
  h1 { font-size: 40px; }
  .main-image { height: 400px; }
  .project-content { grid-template-columns: 1fr; gap: 40px; }
  .details-col { display: flex; gap: 40px; flex-wrap: wrap; }
  .detail-item { border: none; }
}

@media (max-width: 768px) {
  .main-image { height: 300px; }
  .details-col { flex-direction: column; gap: 20px; }
}
</style>