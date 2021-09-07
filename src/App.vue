<template>
  <a-header></a-header>
  <a-content></a-content>
  <a-footer></a-footer>
  <img src="./assets/image/alice.png" class="alice" alt="alice">
</template>

<script>
import AHeader from './components/a-header.vue'
import AContent from './components/a-content.vue'
import AFooter from './components/a-footer.vue'

export default {
  name: 'App',
  components: {
    AHeader,
    AContent,
    AFooter,
  },
}
</script>

<style lang="less">
@import "./common/font/fontello.css";
@import "../node_modules/animate.css/animate.min.css";

* {
  box-sizing: border-box;
}

//修改反白顏色
::-moz-selection { 
  color: #000;
  background: #999;
}
::selection {
  color: #000;
  background: #999;
}

html {
  height : 100%;
  margin : 0; 
  padding : 0; 
  background-color: #101316;
  font-size: 10px;
  overflow-x : hidden;
}

body {
  margin: 0;
  max-width: 100%;
  font-family: fontello;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  padding-top: constant(safe-area-inset-top); /* iOS 11.0-iOS 11.1 */
  padding-top: env(safe-area-inset-top); /*iOS 11.2 */
  // padding-bottom: constant(safe-area-inset-bottom); 
  // padding-bottom: env(safe-area-inset-bottom); 
  overflow-x: hidden;
  color: #e9e9e9;
}

img {
  display: block;
}

h1, h2, h3, h4, h5 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

h1 {
  font-size: 7rem;
  letter-spacing: 2px;
}

h2 {
  font-size: 6rem;
  letter-spacing: 2px;
}

h3 {
  font-size: 3rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

h4 {
  font-size: 2rem;
  font-weight: normal;
}

.container {
  display: flex;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;
  text-align: center;
}

.small-div {
  width: 65%;
}

.float-right {
  float: right;
}

.m-bot-30 {
  margin-bottom: 30px;
}

#App {
  position: relative;
}

img.alice {
  position: absolute;
  bottom: 0;
  right: 0;
  animation: alice-move 3s linear infinite;
}

@keyframes alice-move {
  from {
    right: -10%;
  }
  to {
    right: 100%;
  }
}

@media (min-width:1200px) {
  .container {
    max-width:1300px
  }
}

@media (max-width:1200px) {
  .small-div {
    width: 90%;
  }
}

@media (max-width:768px) {
  .small-div {
    width: 100%;
  }
  img.alice {
    width: 30%;
    height: auto;
  }
}
</style>
