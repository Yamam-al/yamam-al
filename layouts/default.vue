<template>
    <div class="wrapper">
      <Header />
      <NuxtPage class="content"/>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style>
  /* Globale Layoutstile können hier definiert werden */
  </style>
  