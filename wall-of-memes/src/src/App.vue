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
  </div>
</template>

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
</style>
