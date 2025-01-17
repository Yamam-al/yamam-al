<template>
    <div class="info-card">
      <img :src="photo" alt="Profile photo" class="profile-photo" />
      <h1 class="name">{{ name }}</h1>
      <p class="pronouns">{{ pronouns }}</p>
      <p class="birthdate">{{ birthdate }}</p>
      <p class="location">{{ location }}</p>
      <p class="extra">{{ extra }}</p>

      <!-- Social Media Panel -->
      <div class="social-media-panel">
        <a :href="'mailto:' + email" target="_blank" class="social-icon" aria-label="Email">
          <font-awesome-icon icon="envelope" />
        </a>
        <a :href="github" target="_blank" class="social-icon" aria-label="GitHub">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a :href="instagram" target="_blank" class="social-icon" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a :href="telegram" target="_blank" class="social-icon" aria-label="Telegram">
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
        <a :href="snapchat" target="_blank" class="social-icon" aria-label="Snapchat">
          <font-awesome-icon :icon="['fab', 'snapchat']" />
        </a>
      </div>
    </div>
  </template>
  
  <script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pronouns: {
      type: String,
      required: true,
    },
    birthdate: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    extra: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    telegram: {
      type: String,
      required: true,
    },
    snapchat: {
      type: String,
      required: true,
    },
  },
};
</script>

  
  <style scoped>
  .info-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 100%;
    max-width: 300px;
  }
  
  .profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid #ececec;
  }
  
  .name {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .pronouns,
  .birthdate,
  .location,
  .extra {
    font-size: 1em;
    margin: 5px 0;
  }
  
  .extra {
    font-size: 1.2em;
    font-weight: bold;
    color: #ff69b4;
  }
  .social-media-panel {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }
  
  .social-icon {
    color: #555;
    font-size: 1.5em;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #ff69b4; /* Pink highlight on hover */
  }
  
  </style>
  