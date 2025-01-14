<template>
    <div>
      <NuxtPage />
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Stile für dieses spezielle Layout */
  </style>
  