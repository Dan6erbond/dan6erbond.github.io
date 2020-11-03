<template>
  <div id="app">
    <h1 class="pt-4 px-2">Happy birthday Cate!!! 😊🎉🎊</h1>

    <div id="nav" class="pb-1">
      <router-link :to="{ name: 'Home' }">Wall of Memes</router-link> |
      <router-link :to="{ name: 'Text' }">Text</router-link>
    </div>

    <main role="main">
      <router-view />
    </main>

    <b-modal
      v-model="showModal"
      centered
      title="Attention!"
      content-class="sound-dialog-content"
      ok-only
      ok-title="Yes! 😊"
      @ok="startSound"
    >
      <p class="my-4">Do you have sound enabled? 🔊</p>
    </b-modal>

    <div class="sound-progress">
      <div
        class="progress-bar"
        :style="'width: ' + audioTime * 100 / audioDuration + '%'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      audio: null,
      audioTime: 0,
      audioDuration: 0,
    };
  },
  methods: {
    startSound() {
      this.audio = new Audio(
        require("./assets/aud/martin_garrix-khalid-ocean.mp3")
      );
      this.audio.play();

      this.audio.addEventListener("loadedmetadata", () => {
        this.audioDuration = this.audio.duration;
      });

      this.audio.addEventListener("timeupdate", () => {
        this.audioTime = this.audio.currentTime.toFixed();
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

html,
body,
#app {
  min-height: 100vh;
}

#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url("./assets/img/martin_garrix-khalid-ocean-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #b11226;
    }
  }
}

.sound-dialog-content {
  background-color: #2c3e50 !important;
  color: white;

  .close {
    color: white;
  }
}

.sound-progress {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  .progress-bar {
    background-color: #2c3e50;
  height: 10px;
  }
}
</style>
