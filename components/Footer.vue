<template>
    <footer ref="footer" class="footer">
      <p ref="footerText">&copy; 2025.&nbsp;  Alle Rechte vorbehalten.&nbsp;<a style="color: grey;" href="/impressum">Impressum</a></p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    mounted() {
      // Add a scroll event listener
      window.addEventListener("scroll", this.updateFooterOpacity);
    },
    beforeDestroy() {
      // Clean up the event listener
      window.removeEventListener("scroll", this.updateFooterOpacity);
    },
    methods: {
      updateFooterOpacity() {
        const footer = this.$refs.footer;
        const footerText = this.$refs.footerText;
        const scrollTop = window.scrollY; // Current scroll position
        const scrollHeight = document.documentElement.scrollHeight; // Total height of the page
        const clientHeight = window.innerHeight; // Height of the viewport

        const maxScroll = scrollHeight - clientHeight; // Maximum scrollable distance
        const opacity = Math.min(scrollTop / maxScroll, 1); // Calculate opacity (0 to 1)

        // Update footer's background color opacity
        footer.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;

        // Update text opacity and interactivity
        footerText.style.opacity = `${opacity}`;
        footerText.style.pointerEvents = opacity > 0 ? "auto" : "none";
      },
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: rgba(33, 41, 44, 0);
    transition: background-color 0.05s ease; /* Smooth transition for better UX */
    color: white;
    text-align: center;
    padding: 20px 0;
    position:fixed;
    bottom: 0;
    width: 100%;
  }
  .footer p {
    margin: 0;
    opacity: 0; /* Start fully transparent */
    pointer-events: none; /* Disable clicks when invisible */
    transition: opacity 0.05s ease; /* Smooth transition for text opacity */
  }
  </style>
  