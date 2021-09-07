<template>
  <div id="about">
    <div class="container">
      <div class="intro small-div">
        <h3>- 遊戲體驗 -</h3>
        <h4>以探索未知夢境為目標的VR虛擬實境恐怖遊戲，玩家將在故事中扮演第一人稱的主角，於一層層複雜的夢境中尋找線索，以及他的妹妹艾莉絲⋯</h4>
      </div>
      <div class="watch-video small-div">
        <h3>- 觀看旅程 -</h3>
        <div class="videobox">
          <iframe frameborder="0" src="https://www.youtube.com/embed/GtIZRrjr0E0?autoplay=1&mute=1&loop=1&playlist=GtIZRrjr0E0" allowFullScreen="true"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  props: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let introAnimate = document.querySelector('.intro');
      let introAnimateHeight = introAnimate.offsetTop;
      if (windowHeight + scrollHeight > introAnimateHeight) {
        introAnimate.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        introAnimate.classList.remove('animate__animated', 'animate__slideInUp');
      }
      let watchAnimate = document.querySelector('.watch-video');
      let watchAnimateHeight = watchAnimate.offsetTop;
      if (windowHeight + scrollHeight > watchAnimateHeight) {
        watchAnimate.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        watchAnimate.classList.remove('animate__animated', 'animate__slideInUp');
      }
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
#about {
  width: 100%;
  padding: 20px;
  padding-top: 60px;
}

.container {
  margin-top: 0;
  margin-bottom: 0;
}

.intro {
  margin-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

.watch-video {
  margin-top: 100px;
}

.videobox {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.videobox iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.videobox embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .container {
    margin-bottom: 0;
  }
}
</style>
