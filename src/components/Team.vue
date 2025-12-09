<template>
  <section id="about">
    <div class="container">

      <div class="about-header">
        <div class="title-col">
          <h2 v-animate>{{ t.about.title }}</h2>
        </div>
        <div class="desc-col">
          <p v-animate.delay-100>{{ t.about.desc }}</p>
        </div>
      </div>

      <div class="team-grid">
        <div 
          v-for="(member, index) in t.about.team" 
          :key="index" 
          class="member-card"
          v-animate
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="photo-wrapper">
            <img :src="photos[index]" :alt="member.name" />
          </div>
          <h4>{{ member.name }}</h4>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();

const photos = [
  '/ecosmart-studio/image2.jpg', 
  '/ecosmart-studio/image3.jpg', 
  '/ecosmart-studio/image4.jpg' 
];
</script>

<style scoped>
.about-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: start;
}

h2 {
  font-size: 40px;
  line-height: 1.1;
}

.desc-col p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.member-card {
  display: flex;
  flex-direction: column;
}

.photo-wrapper {
  width: 100%;
  aspect-ratio: 3/4; 
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 20px;
  background-color: var(--surface-color);
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease, transform 0.7s ease;
}

.member-card:hover img {
  filter: grayscale(0%);
  transform: scale(1.03);
}

h4 {
  font-size: 20px;
  margin-bottom: 5px;
}

.role {
  color: var(--text-secondary);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .about-header {
    grid-template-columns: 1fr; 
    gap: 30px;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr); 
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .about-header {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .team-grid {
    grid-template-columns: 1fr; 
    gap: 50px;
  }

  h2 { font-size: 32px; }
}
</style>