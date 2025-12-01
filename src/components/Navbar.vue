<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="logo">EcoSmart<span>Studio</span></router-link>

      <div class="desktop-menu">
        <a href="#hero">{{ t.nav.home }}</a>
        <a href="#services">{{ t.nav.services }}</a>
        <a href="#portfolio">{{ t.nav.portfolio }}</a>
        <a href="#process">{{ t.nav.process }}</a>
        <a href="#about">{{ t.nav.about }}</a>
        <a href="#contact">{{ t.nav.contact }}</a>
      </div>

      <div class="nav-actions">
        <button class="lang-btn" @click="toggleLanguage">
          <span :class="{ active: currentLang === 'en' }">EN</span>
          <span class="divider">/</span>
          <span :class="{ active: currentLang === 'ru' }">RU</span>
        </button>

        <a href="#contact" class="btn btn-primary cta-btn">{{ t.nav.cta }}</a>
        
        <button class="burger" @click="isMenuOpen = !isMenuOpen">
          <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <a href="#hero" @click="isMenuOpen = false">{{ t.nav.home }}</a>
      <a href="#services" @click="isMenuOpen = false">{{ t.nav.services }}</a>
      <a href="#portfolio" @click="isMenuOpen = false">{{ t.nav.portfolio }}</a>
      <a href="#about" @click="isMenuOpen = false">{{ t.nav.about }}</a>
      <a href="#contact" @click="isMenuOpen = false">{{ t.nav.contact }}</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useLanguage } from '../composables/useLanguage';
  
  const { t, currentLang, toggleLanguage } = useLanguage();
  const isMenuOpen = ref(false);
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
  transition: background 0.3s ease;
}

.nav-inner {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text-primary);
}

.logo span { color: var(--text-secondary); }

.desktop-menu {
  display: flex;
  gap: 32px;
}

.desktop-menu a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.desktop-menu a:hover { color: var(--text-primary); }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 4px;
}

.lang-btn span.active {
  color: var(--text-primary);
  font-weight: 700;
}

.burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
}

.mobile-menu {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: var(--bg-color);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 1px solid var(--border-color);
  transform: translateY(-150%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
}

.mobile-menu.open { transform: translateY(0); }
.mobile-menu a { 
  font-size: 20px; 
  font-weight: 600; 
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .desktop-menu, .cta-btn { display: none; }
  .burger { display: block; }
}
</style>