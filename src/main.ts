import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

// --- ДИРЕКТИВА v-animate ---
app.directive('animate', {
  mounted: (el, binding) => {
    // 1. Сразу скрываем элемент
    el.classList.add('scroll-hidden');

    // 2. Если переданы модификаторы задержки (v-animate.delay-200)
    if (binding.modifiers['delay-100']) el.classList.add('delay-100');
    if (binding.modifiers['delay-200']) el.classList.add('delay-200');
    if (binding.modifiers['delay-300']) el.classList.add('delay-300');

    // 3. Наблюдаем за появлением
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-visible');
          observer.unobserve(el); // Анимируем только один раз
        }
      });
    }, {
      threshold: 0.1, // Срабатывает, когда видно 10% элемента
      rootMargin: "0px 0px -50px 0px" // Чуть смещаем границу срабатывания
    });

    observer.observe(el);
  }
});

app.use(router)
app.mount('#app')