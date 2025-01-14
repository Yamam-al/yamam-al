// pages/GithubIntegration.vue
<template>
  <div class="container">
    <div class="input-section">
      <label for="github-token">GitHub Access Token:</label>
      <input v-model="githubToken" id="github-token" type="text" placeholder="Enter GitHub Token" />
      <button @click="saveToken">Save</button>
    </div>

    <div class="reset-section">
      <button @click="resetHardyCounter">Reset Hardy Counter</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      githubToken: "",
    };
  },
  mounted() {
    // Load token from localStorage if available
    this.githubToken = "";
  },
  methods: {
    saveToken() {
      if (this.githubToken.trim()) {
        localStorage.setItem("githubToken", this.githubToken);
        alert("Token saved successfully!");
      } else {
        alert("Please enter a valid GitHub token.");
      }
    },

    async resetHardyCounter() {
      if (!this.githubToken) {
        alert("Please save your GitHub token first.");
        return;
      }

      try {
        await resetHardyCounterData(this.githubToken);
        alert("Hardy counter updated successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to update the hardy counter. Check the console for details.");
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}
.input-section {
  margin-bottom: 30px;
}
.input-section label {
  display: block;
  margin-bottom: 10px;
}
.input-section input {
  padding: 10px;
  margin-right: 10px;
}
.reset-section button {
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
}
</style>
