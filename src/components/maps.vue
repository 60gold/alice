<template>
  <div id="maps">
    <div class="container small-div">
      <div class="maps small-div">
        <h3>- 立即體驗 -</h3>
        <h4>《Alice》將帶給你前所未有的VR恐怖遊戲</h4>
        <div class="map-box">
          <div class="intro">
            什麼時候可以遊玩？<br>週一至週五中午 12 點至下午 6 點開放體驗。<br><br>遊戲時間是多久？<br>1-2 小時，可中途休息再繼續。<br><br>誰能玩？<br>本遊戲的年齡建議為 18 歲以上。遊戲內容包含血腥、暴力，故目前無法提供 18 歲以下遊玩，敬請見諒。<br>孕婦、高血壓、及易3D暈玩家，請自行斟酌身體狀況再作體驗，以防突發身體狀況，謝謝。
          </div>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.377320570859!2d121.5457786153782!3d24.98729164631538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801fd50239bcd%3A0xa65aac763e031255!2z5LiW5paw5aSn5a24566h55CG5a246Zmi!5e0!3m2!1szh-TW!2stw!4v1631016183010!5m2!1szh-TW!2stw" width="100%" height="100%" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maps",
  props: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let mapsAnimate = document.querySelector('#maps');
      let mapsAnimateHeight = mapsAnimate.offsetTop;
      if (windowHeight + scrollHeight > mapsAnimateHeight) {
        mapsAnimate.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        mapsAnimate.classList.remove('animate__animated', 'animate__slideInUp');
      }
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
#maps {
  width: 100%;
}

.container {
  margin-top: 0;
  margin-bottom: 0;
}

.map {
  text-align: center;
}

h3 {
  margin-bottom: 0;
}

.map-box {
  display: flex;
  height: 100%;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, .4);
  background-blend-mode: multiply;
  background-image: url(../assets/image/image01.jpg);
  background-size: cover;
  background-position: 50%;
  .intro {
    flex: 0 0 60%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    line-height: 1.5;
  }
  .map {
    flex: 0 0 40%;
    background-color: #fff;
  }
}

@media (max-width: 768px) {
  #maps {
    padding-top: 60px;
  }
  .container {
    margin-bottom: 0;
  }
  .map-box {
    flex-wrap: wrap;
    .intro {
      flex: 0 0 100%;
    }
    .map {
      flex: 0 0 100%;
    }
  }
}
</style>
