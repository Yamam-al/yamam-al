<template>
    <div class="info-card">
      <img :src="photo" alt="Profile photo" class="profile-photo" />
      <h1 class="name">{{ name }}</h1>
      <p class="pronouns">{{ pronouns }}</p>
      <p class="birthdate">{{ birthdate }}</p>
      <p class="location">{{ location }}</p>
      <p class="extra">{{ extra }}</p>
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
  </style>
  