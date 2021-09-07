<template>
  <div id="banner" @mousewheel.prevent="ifMoveDown">
    <div class="logo">
      <h2>Alice</h2>
      <h3>ToDream</h3>
    </div>
    <div class="video-bar">
      <div class="of20">
        <video loop="loop" autoplay muted>
          <source src="../assets/image/alice240.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="of20">
        <video loop="loop" autoplay muted>
          <source src="../assets/image/alice240.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="of20"></div>
      <div class="of20">
        <video class="float-right" loop="loop" autoplay muted>
          <source src="../assets/image/alice240.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="of20">
        <video class="float-right" loop="loop" autoplay muted>
          <source src="../assets/image/alice240.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <video class="banner-video" loop="loop" autoplay muted>
      <source src="../assets/image/alice.mp4" type="video/mp4" />
    </video>
    <!-- <h2>Alice</h2> -->
    <div class="arrow" @click="moveToIntro"><i class="icon-down"></i></div>
  </div>
</template>

<script>
export default {
  name: "a-header",
  props: {},
  methods: {
    moveToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    moveToIntro() {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth",
      });
    },
    ifMoveDown(e) {
      if (e.wheelDelta || e.detail) {
        if (e.wheelDelta > 0 || e.detail < 0) {
          // console.log('up');
          this.moveToTop();
        }
        if (e.wheelDelta < 0 || e.detail > 0) {
          // console.log('down');
          this.moveToIntro();
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
#banner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

video.banner-video {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 100%;
  object-fit: fill;
  transition: width .8s;
  animation-name: video-bg;
  animation-duration: 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

@keyframes video-bg {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.logo {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, .6);
  background: rgba(0, 0, 0, .6);
  cursor: default;
  opacity: 0;
  z-index: 10;
  animation-name: logo-animation;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  transition: all .3s ease;
  h2 {
    font-size: 7vw;
    line-height: 1;
  }
  h3 {
    font-size: 2vw;
  }
}

@keyframes logo-animation {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
    background: transparent;
  }
  80% {
    opacity: 1;
    transform: scale(1);
    background: transparent;
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
    background: rgba(0, 0, 0, .6);
  }
}

.video-bar {
  display: flex;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  animation-name: video-move-left;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  .of20 {
    width: 20%;
    video {
      width: 90%;
    }
  }
}

@keyframes video-move-left {
  0% {
    left: 100%;
  }
  50% {
    left: 0%;
  }
  70% {
    left: 0%;
    opacity: 1;
  }
  100% {
    left: 0%;
    opacity: 0;
    visibility: hidden;
  }
}

// #banner h2 {
//   position: absolute;
//   top: 0;
//   left: 0;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100vh;
//   font-size: 30vw;
//   text-align: center;
//   line-height: 100vh;
//   text-transform: uppercase;
//   background-color: #5a5a5a;
//   mix-blend-mode: screen;
//   cursor: default;
// }

.arrow {
  position: absolute;
  bottom: 6%;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  z-index: 10;
  animation-name: get-down;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes get-down {
  0% {
    bottom: 6%;
  }
  22% {
    bottom: 4%;
  }
  25% {
    bottom: 4%;
  }
  50% {
    bottom: 6%;
  }
  100% {
    bottom: 6%;
  }
}

@media (max-width:768px) {
  .logo {
    h2 {
      font-size: 18vw;
    }
    h3 {
      font-size: 6vw;
    }
  }
}
</style>
