<template>
  <div class="home p-3 pb-4">
    <vue-headful title="Cate B-Day 2020 | Wall of Memes" />
    <h2>Wall of Memes</h2>
    <span class="mb-3 d-block">
      A collection of memes that I wanted to share with you.
    </span>
    <b-container class="memes" fluid>
      <b-row>
        <b-col
          cols="4"
          sm="3"
          md="2"
          v-for="(meme, index) in filteredMemes"
          :key="index"
          class="my-2"
        >
          <b-img
            :src="meme.img"
            thumbnail
            @click="() => imgClick(index)"
            fluid-grow
            height="150"
            alt="Happy birthday Cate! 🎉🎂"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="slideshow flex-column justify-content-center"
      @click.self="showSlideshow = false"
      v-show="showSlideshow"
    >
      <b-carousel
        v-model="slideshowIndex"
        controls
        indicators
        :interval="0"
        background="#ababab"
        @click.stop="() => true"
      >
        <b-carousel-slide
          v-for="(meme, index) in filteredMemes"
          :key="index"
          :caption="meme.title || ' '"
          :text="meme.subtitle || ' '"
          :img-src="meme.img"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      slideshowIndex: 0,
      showSlideshow: false,
    };
  },
  computed: {
    ...mapState(["memes"]),
    filteredMemes() {
      return this.memes.filter((m) => !m.ignore);
    },
  },
  methods: {
    imgClick(index) {
      this.slideshowIndex = index;
      this.showSlideshow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.memes {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/img/martin_garrix-khalid-ocean-2.jpg");
  border: solid 10px #b11226;
  min-height: 75vh;
  padding: 20px;

  .img-thumbnail {
    cursor: pointer;
  }
}

.slideshow {
  z-index: 10;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex; // due to constraints of v-show and Boostrap !important
}
</style>

<style lang="scss">
.slideshow {
  .carousel {
    max-height: 100vh;

    img {
      max-height: 100vh;
      width: auto;
    }
  }

  .carousel-caption {
    top: 30px;
    display: flex;
    bottom: 30px;
    flex-direction: column;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);

    h3 {
      font-size: 32px;
      height: 100%;
    }

    p {
      font-size: 24px;
    }
  }
}

@media screen and (max-width: 768px) {
  .slideshow {
    .carousel-caption {
      right: 5%;
      left: 5%;
      bottom: 10px;
      top: 10px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}
</style>
