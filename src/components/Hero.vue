<template>
  <section id="hero" class="hero">
    <div class="container">
      
      <div class="hero-grid">

        <div class="image-area" v-animate.delay-200>
          <img src="/hero-modern.png" alt="Modern Architecture" />
        </div>

        <div class="text-area">
          <div class="glass-card" v-animate>
            <h1>{{ t.hero.title }}</h1>
            <p class="subtitle">{{ t.hero.subtitle }}</p>
            
            <div class="buttons">
              <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary">
                {{ t.hero.btn_primary }}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </router-link>
              <router-link :to="{ path: '/', hash: '#portfolio' }" class="btn btn-outline">
                {{ t.hero.btn_secondary }}
              </router-link>
            </div>
          </div>
        </div>

      </div>

      <div class="mission-block" v-animate>
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
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; 
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  position: relative;
}

.image-area {
  grid-column: 4 / 13; 
  grid-row: 1;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
  z-index: 1;
  transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.image-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition: transform 0.6s ease;
}

.text-area {
  grid-column: 1 / 8; 
  grid-row: 1;
  z-index: 2; 
  padding-right: 20px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.4); 
  backdrop-filter: blur(20px); 
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

h1 {
  font-size: 64px;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--text-primary);
  letter-spacing: -1.5px;
}

.subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 90%;
}

.buttons {
  display: flex;
  gap: 16px;
}

.mission-block {
  border-top: 1px solid var(--border-color);
  padding-top: 60px;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.mission-grid h2 { font-size: 28px; }
.mission-grid p { color: var(--text-secondary); font-size: 16px; }

@media (max-width: 1024px) {
  .hero { padding-top: 140px; }

  h1 { font-size: 48px; }

  .image-area { grid-column: 4 / 13; height: 500px; }
  .text-area { grid-column: 1 / 9; }
}

@media (max-width: 768px) {
  .hero-grid {
    display: flex;
    flex-direction: column-reverse; 
    gap: 30px;
  }

  .image-area {
    width: 100%;
    height: 300px;
    border-radius: 16px;
  }

  .text-area {
    width: 100%;
    padding: 0;
  }

  .glass-card {
    background: transparent; 
    backdrop-filter: none;
    padding: 0;
    border: none;
    box-shadow: none;
    text-align: center;
  }

  h1 { font-size: 40px; }
  .subtitle { margin: 0 auto 30px; }

  .buttons { 
    flex-direction: column; 
    width: 100%; 
    gap: 12px;
  }

  .buttons :deep(.btn) {
    width: 100%; 
  }

  .mission-grid { grid-template-columns: 1fr; gap: 30px; }
}
</style>