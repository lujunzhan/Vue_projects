<template>
  <div id="app">
    <!-- 背景图 -->
    <div class="background">
      <img src="./assets/bg.jpg" width="100%;" height="100%;" alt />
    </div>

    <!-- 图层蒙版 背景虚化 -->
    <div id="cover"></div>

    <!-- 主要内容 -->
    <div>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>

    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Todo from "./components/todo.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Todo,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

html,
body {
  font-size: 14px;
  width: 100%;
  height: 100%;
}

body {
  /* background-color: blue; */
  background-size: cover;
  background-position: center;
  /* font: 14px; */
  color: #4d4d4d;
  font-weight: 300;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  position: absolute;
  background-color: #999;
  opacity: 0.5;
}

.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  position: absolute;
}

</style>
