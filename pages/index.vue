<template>
  <div class="container">
    <div class="left-section info-card">
      <InfoCard
        :photo="profilePhoto"
        name="Yamam Al Shoufani"
        pronouns="he/him"
        birthdate="22.09.00"
        location="🗺️ Swaida ➡️ Essen ➡️ Hamburg 🗺️"
        extra=""
        email="alshoufani@gmail.com"
        github="https://github.com/Yamam-al"
        instagram="https://www.instagram.com/yamam.al"
        telegram="https://t.me/yamam_al"
        snapchat="https://www.snapchat.com/add/yamam.al"
      />

    </div>
    <div class="right-section">
      <div class="instagram-feed">
        <div v-for="(imgSrc) in galleryImages" class="image-card">
          <img :src="imgSrc"/>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <h1>Meme Of The Day</h1>
      <h2>{{ memeOfTheDay?.title }}</h2>
      <img
        class="memeImg"
        v-if="memeOfTheDay"
        :src="memeOfTheDay.url"
        :alt="memeOfTheDay.title"
      />
    </div>
  </div>
</template>

<script>
import photoPath from '@/static/photos/pp.jpg';
import photo1 from '@/static/photos/photo1.jpg';
import photo2 from '@/static/photos/photo2.jpg';
import photo3 from '@/static/photos/photo3.jpg';
import photo4 from '@/static/photos/photo4.jpg';
import photo5 from '@/static/photos/photo5.jpg';
import photo6 from '@/static/photos/photo6.jpg';
      
export default {
  data() {
    return {
      profilePhoto: photoPath,
      instagramImages: [],
      memeOfTheDay: null,
      galleryImages: [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6
      ],
    };
  },
  async mounted() {
    try {
      // Fetch Meme of the Day
      const response = await fetch(
        'https://www.reddit.com/r/ProgrammerHumor/top/.json?limit=1'
      );
      const data = await response.json();
      const meme = data.data.children[0].data;

      this.memeOfTheDay = {
        title: meme.title,
        url: meme.url_overridden_by_dest,
      };
    } catch (error) {
      console.error('Error fetching dank meme:', error);
    }
  },
};
</script>

<style scoped>
/* Meme-Bild */
.memeImg {
  max-width: 80%;
  max-height: 400px;
  object-fit: contain;
}

/* Header-Styles */
h2 {
  margin-bottom: 15px;
  font-size: 1.5em;
  text-align: center;
}
.instagram-feed {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 Spalten */
  grid-template-rows: repeat(3, auto); /* 3 Zeilen */
  gap: 10px; /* Abstand zwischen Bildern */
  width: 100%; /* Maximale Breite */
  max-width: 300px; /* Optional: Maximale Galerie-Breite */
}

.image-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

</style>
