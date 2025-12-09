<template>
  <section id="contact">
    <div class="container">
      <div class="contact-grid">

        <div class="form-wrapper" v-animate>
          <h2>{{ t.contact.title }}</h2>
          <p class="desc">{{ t.contact.desc }}</p>

          <form class="form" @submit.prevent="sendEmail">
            <input 
              v-model="form.name" 
              type="text" 
              :placeholder="t.contact.form.name" 
              required 
            />
            <input 
              v-model="form.email" 
              type="email" 
              :placeholder="t.contact.form.email" 
              required 
            />
            <textarea 
              v-model="form.message" 
              rows="4" 
              :placeholder="t.contact.form.msg" 
              required
            ></textarea>

            <button 
              type="submit" 
              class="btn btn-primary full" 
              :disabled="isLoading"
            >
              {{ isLoading ? 'Sending...' : t.contact.form.btn }}
            </button>

            <p v-if="statusMessage" :class="['status-msg', statusType]">
              {{ statusMessage }}
            </p>
          </form>
        </div>

        <!-- Контакты -->
        <div class="info-wrapper" v-animate.delay-200>
          <div class="item">
            <div class="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <div><span class="lbl">Social</span><p>@ecosmart.studio</p></div>
          </div>
          <div class="item">
            <div class="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div><span class="lbl">Email</span><p>ecosmartstudio@gmail.com</p></div>
          </div>
          <div class="item">
            <div class="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div><span class="lbl">Location</span><p>Minsk, Belarus</p></div>
          </div>
        </div>
      </div>

      <footer>
        <p>{{ t.contact.footer }}</p>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const form = reactive({
  name: '',
  email: '',
  message: ''
});

// Состояния
const isLoading = ref(false);
const statusMessage = ref('');
const statusType = ref(''); 

const sendEmail = async () => {
  isLoading.value = true;
  statusMessage.value = '';

  const SERVICE_ID = 'service_wi45ehn'; 
  const TEMPLATE_ID = 'template_8j7g1ud';
  const PUBLIC_KEY = 'AcgHZ8UHr-Eh-AAFw';  

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.name,
      email: form.email,
      message: form.message
    }, PUBLIC_KEY);

    statusMessage.value = 'Message sent successfully!';
    statusType.value = 'success';
    form.name = '';
    form.email = '';
    form.message = '';

  } catch (error) {
    console.error('Email error:', error);
    statusMessage.value = 'Failed to send message. Please try again.';
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
#contact { border-top: 1px solid var(--border-color); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
}

.desc { color: var(--text-secondary); margin-bottom: 32px; }

.form { display: flex; flex-direction: column; gap: 16px; }

input, textarea {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 12px;
  color: var(--text-primary); 
  font-family: inherit;
  font-size: 16px;
  width: 100%;
}

input:focus, textarea:focus {
  outline: none;
  border-color: rgba(0,0,0,0.3);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.full { width: 100%; }

.status-msg {
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
}
.status-msg.success { color: #10b981; } 
.status-msg.error { color: #ef4444; }   

.info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.item { display: flex; align-items: center; gap: 20px; }

.icon-circle {
  width: 50px;
  height: 50px;
  background: var(--surface-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.lbl { font-size: 12px; color: var(--text-secondary); text-transform: uppercase; }

footer {
  border-top: 1px solid var(--border-color);
  padding-top: 40px;
  color: var(--text-secondary);
  font-size: 14px;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr; 
    gap: 60px;
  }
  
  .info-wrapper {
    flex-direction: row; 
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  
  .info-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>