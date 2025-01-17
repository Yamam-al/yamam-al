import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faTelegram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faEnvelope, faGithub, faInstagram, faTelegram, faSnapchat);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
