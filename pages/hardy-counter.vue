<template>
    <div class="container">
      <h1>Hardy Counter</h1>
      <div class="counter">{{ counter.days }} Tage, {{ counter.hours }} Stunden, {{ counter.minutes }} Minuten</div>
      <button @click="resetCounter">Counter zurücksetzen</button>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'counterLayout', // Spezielle Layout-Datei verwenden
    data() {
      return {
        initialDate: new Date('2025-01-14T17:30:00'), // Initialdatum
        counter: {
          days: 0,
          hours: 0,
          minutes: 0,
        },
        interval: null,
      };
    },
    methods: {
      calculateCounter() {
        const now = new Date();
        const diff = now - this.initialDate;
  
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
        this.counter = { days, hours, minutes };
      },
      resetCounter() {
        this.initialDate = new Date(); // Neues Initialdatum setzen
        this.calculateCounter();
      },
    },
    mounted() {
      this.calculateCounter();
      this.interval = setInterval(this.calculateCounter, 60000); // Jede Minute aktualisieren
    },
    beforeDestroy() {
      clearInterval(this.interval); // Interval aufräumen
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  .counter {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  </style>
  