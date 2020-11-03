import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memes: [
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/dxxqrz/we_dont_do_that_here/",
        img: "https://i.redd.it/5r9o8so89dz31.jpg",
        subtitle: "Not on my watch!",
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/dykgki/we_might_be_in_boys/",
        img: "https://i.redd.it/vynwbbu8bnz31.png",
        title:
          "You should have expected at least ONE dad joke from me today. 😂",
      },
      {
        url:
          "https://www.reddit.com/r/BirdsArentReal/comments/dxwcto/made_these_in_mm_store_in_times_square_gotta/",
        img: "https://i.redd.it/6g5v2kh7pcz31.jpg",
        title: "Sorry to disappoint. 😔",
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/dyieeb/me_irl/",
        img: "https://i.redd.it/xmrg8l498mz31.jpg",
        title: "People just can't handle it. Smh.",
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/e5l79p/me_irl/",
        img: "https://i.redd.it/l6cbm7idng241.jpg",
        subtitle: "Honestly, I feel like you'll enjoy the second one more. 🤔",
      },
      {
        url:
          "https://www.reddit.com/r/facepalm/comments/e0cedl/not_sure_if_this_has_been_posted_before/",
        img: "https://i.redd.it/biz8aaunvc041.jpg",
        title: "No comment. 😶",
      },
      {
        url:
          "https://www.reddit.com/r/sadcringe/comments/e09ljk/he_was_done_pudding_up_with_her/",
        img: "https://i.redd.it/dhvetdfkrb041.jpg",
        subtitle: "I tira miss you Cate. ♥",
      },
      {
        url:
          "https://www.reddit.com/r/boottoobig/comments/e0ctsm/ice_is_cold_water_is_wet/",
        img: "https://i.redd.it/hey5homp2d041.jpg",
        title:
          "Baguette coffins shut with Flextape is all we've ever asked for!",
      },
      {
        url:
          "https://www.reddit.com/r/PewdiepieSubmissions/comments/e0hwq2/slaps_glass/",
        img: "https://i.redd.it/iknsc2j4vf041.jpg",
        title: "I've always told you Elon Musk is an idiot, Cate.",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e0n61y/recycle_yourself/",
        img: "https://i.redd.it/me11rs6urh041.jpg",
        title: "Have you been counting the puns? 😛",
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/e1hseb/me_irl/",
        img: "https://i.redd.it/4s3kunecsu041.jpg",
        subtitle: "Communism and love are the ultimate birthday present. 🎂",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e30qi6/got_a_whole_lotta_love/",
        img: "https://i.redd.it/e9j62llmkg141.jpg",
        sutitle: "Pretty birdie. 😍",
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/e7h47b/blursed_duel/",
        img: "https://i.redd.it/11bjwo7ey8341.jpg",
        title: "BAGUETTE FIGHTS! 🥖",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e98tud/it_starts_fading_away/",
        img: "https://i.redd.it/xh4icgij01441.jpg",
        subtitle: "You always manage to put a smile on my face. 😊",
      },
      {
        url:
          "https://www.reddit.com/r/ToiletPaperUSA/comments/ebhah1/sorry_for_quality_but_i_did_this_on_a_phone/",
        img: "https://i.redd.it/b83c1p6pu0541.jpg",
        title: "In case laughing at conservatives hasn't gotten old yet...",
      },
      {
        url:
          "https://www.reddit.com/r/ShittyLifeProTips/comments/ebddym/slpt_for_tall_people/",
        img: "https://i.redd.it/idah3w971z441.jpg",
        subtitle: "Thank god we won't have to do this with each other. 😂",
      },
      {
        url:
          "https://www.reddit.com/r/clevercomebacks/comments/eauad1/i_also_want_to_exchange/",
        img: "https://i.redd.it/tiirkv403q441.jpg",
        subtitle: "See Cate? You can toootally give me your yacht... 😜",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/ebrja2/boop_boop_dig_dig/",
        img: "https://i.redd.it/v3i8czttq4541.jpg",
        subtitle: "I'll always be here for you. ♥",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/ecfcj2/ill_stand_by_you/",
        img: "https://i.redd.it/64cel9aqbf541.jpg",
        subtitle: "In case I haven't said it enough.",
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/8aaf4y/ha_ha_depression_pickup_lines/",
        img: "https://i.redd.it/zy7wt5p04bq01.jpg",
        title: "I told you one day I'll use this on you. 😂",
      },
      {
        url:
          "https://www.reddit.com/r/cursedcomments/comments/erzfdo/cursed_toaster/",
        img: "https://i.redd.it/7dnwqejil6c41.jpg",
        subtitle: "In case once wasn't enough. 😛",
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/ex1kmh/blursed_leg/",
        img: "https://i.redd.it/3ph36ru729e41.jpg",
        subtitle: "Made for leg connoisseurs such as us. 😌",
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/epj8bb/honks_wholesomely/",
        img: "https://i.redd.it/gxq1p9ru55b41.png",
        subtitle: "Peaceful spin on your favorite birdie! 😊",
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/e1o2w4/bio_said_she_was_looking_for_a_seth_rogan_to_marry/",
        img: "https://i.redd.it/3s8i0puvww041.jpg",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/KamikazeByWords/comments/e2ej12/when_you_find_the_right_one_you_know/",
        img: "https://i.redd.it/tyxfgtq2x4141.png",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e60d67/thank_you_joker/",
        img: "https://i.redd.it/p4uqsushrm241.jpg",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e1ocyt/how_i_feel_about_this_community_oc/",
        img: "https://i.redd.it/3xr2j1oetw041.jpg",
        subtitle: "*panties drop*",
      },
      {
        title: "I owe you some OC. 😊",
        img: require("../assets/img/photo_2020-11-02_23-54-11.jpg"),
      },
      {
        title: "Happy Birthday dear. 😊🎂",
        img: require("../assets/img/photo_2020-11-02_00-00-11.jpg"),
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/dv40yz/lets_teach_the_youngins/",
        img: "https://i.redd.it/78ul9vera6y31.jpg",
        subtitle: "I love you Cate, and I hope you have an amazing birthday. ♥",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
