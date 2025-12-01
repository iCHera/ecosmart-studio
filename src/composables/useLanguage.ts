// src/composables/useLanguage.ts
import { ref, computed } from 'vue';

const currentLang = ref<'en' | 'ru'>('en');

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      cta: 'Request Quote'
    },
    hero: {
      title: 'Designing Smart & Eco-Friendly Homes',
      subtitle: 'We create functional layouts, eco-oriented solutions, thoughtful renovation designs, and integrated smart systems for your home.',
      btn_primary: 'Get EcoSmart Project',
      btn_secondary: 'View Portfolio',
      mission_title: 'Creating smart, eco-friendly, and technological spaces',
      mission_text: 'EcoSmart Studio is a team of architects, engineers, and designers creating modern eco-homes and smart spaces. We combine engineering precision, smart planning, an ecological approach, and modern smart home technologies.'
    },
    services: {
      label: 'Our Services',
      title: 'What We Do',
      items: [
        { title: 'Eco-Planning & Architecture', desc: 'Space optimization, natural lighting, eco-materials, and smart zoning.' },
        { title: 'Smart Home Integration', desc: 'Smart lighting, climate control, security, turnkey automation scenarios.' },
        { title: 'Renovation & Design', desc: 'Modern eco-minimalist design, next-gen materials, engineering solutions.' },
        { title: 'Supervision', desc: 'Finding verified contractors, stage control, engineering checks.' }
      ]
    },
    portfolio: {
      label: 'Portfolio',
      title: 'Featured Projects',
      link: 'View Project',
      items: [
        { title: 'Eco Loft Apartment', desc: 'Modern eco-loft layout, natural materials.' },
        { title: 'Smart Minimalist Home', desc: 'Clean Scandinavian design with automation.' },
        { title: 'Green Family House', desc: 'Family eco-house with solar solutions.' }
      ]
    },
    process: {
      label: 'Timeline',
      title: 'How We Work',
      items: [
        { id: '01', title: 'Analysis', text: 'Interviews, lifestyle study, eco & tech audit.' },
        { id: '02', title: 'Concept', text: 'Layout creation, zoning, lighting calculation.' },
        { id: '03', title: 'Design', text: 'Style definition, rough and finish materials.' },
        { id: '04', title: 'Integration', text: 'Embedding "Smart Home": climate, lighting, IoT.' },
        { id: '05', title: 'Contractors', text: 'Selecting verified executors for your budget.' },
        { id: '06', title: 'Supervision', text: 'Quality control, deadlines, engineering checks.' }
      ]
    },
    contact: {
      title: 'Request EcoSmart Project',
      desc: 'Tell us about your home, renovation, or project — we will find the optimal solution.',
      form: { name: 'Name', email: 'Email', msg: 'Message', btn: 'Send Request' },
      footer: 'EcoSmart Studio © 2025. All rights reserved.'
    },
    about: {
      title: 'EcoSmart Studio — Architecture of the Future',
      desc: 'Our studio combines an engineering approach, minimalist design, technology, and ecology. We create homes that save energy, increase comfort, and look modern for years to come.',
      team: [
        { name: 'Alex Morgan', role: 'Lead Architect' },
        { name: 'Sarah Connor', role: 'Smart Systems Engineer' },
        { name: 'David Chen', role: 'Interior Designer' }
      ]
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      portfolio: 'Портфолио',
      process: 'Процесс',
      about: 'О нас',
      contact: 'Контакты',
      cta: 'Запросить смету'
    },
    hero: {
      title: 'Проектируем умные и экологичные дома',
      subtitle: 'Создаём функциональные планировки, эко-ориентированные решения и интегрированные умные системы для вашего дома.',
      btn_primary: 'Получить проект',
      btn_secondary: 'Портфолио',
      mission_title: 'Создаём умные, экологичные и технологичные пространства',
      mission_text: 'EcoSmart Studio — это команда архитекторов и инженеров. Мы объединяем инженерную точность, грамотную планировку и технологии умного дома.'
    },
    services: {
      label: 'Услуги',
      title: 'Что мы делаем',
      items: [
        { title: 'Эко-планировка', desc: 'Оптимизация пространства, естественное освещение, эко-материалы и зонирование.' },
        { title: 'Интеграция Умного Дома', desc: 'Умное освещение, климат-контроль, безопасность, автоматизация сценариев.' },
        { title: 'Дизайн реновации', desc: 'Современный eco-minimalist дизайн, материалы нового поколения.' },
        { title: 'Авторский надзор', desc: 'Поиск подрядчиков, контроль этапов работ, инженерная проверка.' }
      ]
    },
    portfolio: {
      label: 'Портфолио',
      title: 'Наши проекты',
      link: 'Смотреть проект',
      items: [
        { title: 'Eco Loft Apartment', desc: 'Современная эколофт-планировка, натуральные материалы.' },
        { title: 'Smart Minimalist Home', desc: 'Чистый скандинавский дизайн с автоматизацией.' },
        { title: 'Green Family House', desc: 'Семейный эко-дом с солнечными решениями.' }
      ]
    },
    process: {
      label: 'Процесс',
      title: 'Как мы работаем',
      items: [
        { id: '01', title: 'Анализ', text: 'Интервью, изучение образа жизни, тех-аудит.' },
        { id: '02', title: 'Концепт', text: 'Планировка, зонирование, расчёт освещения.' },
        { id: '03', title: 'Дизайн', text: 'Стиль, черновая и чистовая отделка.' },
        { id: '04', title: 'Интеграция', text: 'Закладываем "умный дом": климат, IoT.' },
        { id: '05', title: 'Подрядчики', text: 'Подбор исполнителей под бюджет.' },
        { id: '06', title: 'Надзор', text: 'Контроль качества и сроков.' }
      ]
    },
    contact: {
      title: 'Запросите EcoSmart-проект',
      desc: 'Расскажите о вашем доме или проекте — мы подберём решение.',
      form: { name: 'Имя', email: 'Email', msg: 'Сообщение', btn: 'Отправить' },
      footer: 'EcoSmart Studio © 2025. Все права защищены.'
    }, 
    about: {
      title: 'EcoSmart Studio — архитектура будущего',
      desc: 'Наша студия сочетает инженерный подход, минималистичный дизайн, технологичность и экологичность. Мы создаём дома, которые экономят энергию, повышают комфорт и выглядят современно долгие годы.',
      team: [
        { name: 'Алекс Морган', role: 'Ведущий архитектор' },
        { name: 'Сара Коннор', role: 'Инженер Smart-систем' },
        { name: 'Дэвид Чен', role: 'Дизайнер интерьеров' }
      ]
    },
  }
};

export function useLanguage() {
  const t = computed(() => translations[currentLang.value]);
  
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'ru' : 'en';
  };

  return { t, currentLang, toggleLanguage };
}