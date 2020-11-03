<template>
  <div class="home p-3">
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
            :id="index == randomMemeIndex ? 'tooltip-img' : ''"
            class="cursor-pointer"
            alt="Happy birthday Cate! 🎉🎂"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <b-tooltip
      target="tooltip-img"
      ref="img-tooltip"
      variant="primary"
      trigger="manual"
      :show.sync="showImgTooltip"
      :disabled.sync="imgTooltipDisabled"
    >
      Click me!
    </b-tooltip>

    <div
      class="slideshow flex-column justify-content-center"
      @click.self="closeSlideshow"
      v-show="showSlideshow"
      ref="slideshow"
    >
      <div class="slideshow-close-container d-flex justify-content-center py-3">
        <b-button-close
          class="slideshow-close"
          text-variant="primary"
          @click="closeSlideshow"
        ></b-button-close>
      </div>

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
          :caption-html="getMemeTitle(meme)"
          :text-html="getMemeSubtitle(meme)"
          :img-src="meme.img"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      slideshowIndex: 0,
      showSlideshow: false,
      imgTooltipDisabled: false,
      showImgTooltip: true,
    };
  },
  computed: {
    ...mapState(["memes", "randomMemeIndex"]),
    filteredMemes() {
      return this.memes.filter((m) => !m.ignore);
    },
  },
  methods: {
    ...mapMutations(["setRandomMemeIndex"]),
    imgClick(index) {
      this.slideshowIndex = index;
      this.showSlideshow = true;
      this.imgTooltipDisabled = true;
      this.showImgTooltip = false;
      this.$refs["img-tooltip"].$emit("close");
    },
    closeSlideshow() {
      this.showSlideshow = false;
    },
    backbuttonListener(event) {
      if (this.showSlideshow) {
        event.preventDefault();
        this.closeSlideshow();
      }
    },
    escapeListener(event) {
      if (event.key === "Escape") this.closeSlideshow();
    },
    getMemeTitle(meme) {
      let title = " ";
      if (meme.title) {
        title = meme.title;
      }
      if (!meme.subtitle && meme.displayLink) {
        title += ` <a href="${meme.url}" target="_blank">🔗</a>`;
      }
      return title;
    },
    getMemeSubtitle(meme) {
      let subtitle = " ";
      if (meme.subtitle) {
        subtitle = meme.subtitle;
        if (!meme.title && meme.displayLink) {
          subtitle += ` <a href="${meme.url}" target="_blank">🔗</a>`;
        }
      }
      return subtitle;
    },
  },
  mounted() {
    if (this.randomMemeIndex === null) {
      const index = Math.floor(Math.random() * Math.min(this.memes.length, 10));
      this.setRandomMemeIndex({
        index,
      });
    }
    this.$refs["img-tooltip"].$emit("open");
    document.addEventListener("backbutton", this.backbuttonListener, false);
    window.addEventListener("keydown", this.escapeListener);
  },
  beforeDestroy() {
    document.removeEventListener("backbutton", this.backbuttonListener);
    window.removeEventListener("keydown", this.escapeListener);
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

  .slideshow-close {
    color: white !important;
    opacity: 1;
    border-radius: 50%;
    background-color: #b11226;
    transition: opacity ease 0.25s;
    padding: 6px;
    width: 35px;
  }
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
