<template>
  <section id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="form-wrapper" v-animate>
          <h2>{{ t.contact.title }}</h2>
          <p class="desc">{{ t.contact.desc }}</p>
          
          <form class="form">
            <input type="text" :placeholder="t.contact.form.name" />
            <input type="email" :placeholder="t.contact.form.email" />
            <textarea rows="4" :placeholder="t.contact.form.msg"></textarea>
            <button type="button" class="btn btn-primary full">{{ t.contact.form.btn }}</button>
          </form>
        </div>

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
            <div><span class="lbl">Email</span><p>hello@ecosmart.studio</p></div>
          </div>
          <div class="item">
            <div class="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div><span class="lbl">Location</span><p>New York, NY</p></div>
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
import { useLanguage } from '../composables/useLanguage';
const { t } = useLanguage();
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

.full { width: 100%; }

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
}
</style>