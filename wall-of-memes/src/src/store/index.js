import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memes: [
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/dv40yz/lets_teach_the_youngins/",
        img:
          "https://preview.redd.it/78ul9vera6y31.jpg?width=960&crop=smart&auto=webp&s=652f9a2deb65d443fa24263102298102b4e805a6",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
