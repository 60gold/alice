<template>
  <div id="news">
    <div class="container small-div">
      <div class="news small-div">
        <h3>- 最新消息 -</h3>
        <div class="all-news">
          <div class="news-block news-1">
          <div class="thumbnail">
            <div class="image"></div>
          </div>
          <div class="title">《Alice》正式登場</div>
          <div class="subtitle">世新資管23th校外展<br>松山菸廠3號倉庫</div>
        </div>
        <div class="news-block news-2">
          <div class="thumbnail">
            <div class="image"></div>
          </div>
          <div class="title">內部測試即刻開始</div>
          <div class="subtitle">敬請期待今年冬季</div>
        </div>
        <div class="news-block news-3">
          <div class="thumbnail">
            <div class="image"></div>
          </div>
          <div class="title">美術設定集大公開！</div>
          <div class="subtitle">你最期待的全都有<br>Alice在等你！</div>
        </div>
        <div class="news-block news-4">
          <div class="thumbnail">
            <div class="image"></div>
          </div>
          <div class="title">全新VR恐怖遊戲</div>
          <div class="subtitle">coming soon⋯</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  props: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let newsAnimate = document.querySelector('#news');
      let newsAnimateHeight = newsAnimate.offsetTop;
      if (windowHeight + scrollHeight > newsAnimateHeight) {
        newsAnimate.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        newsAnimate.classList.remove('animate__animated', 'animate__slideInUp');
      }
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
#news {
  width: 100%;
  margin-bottom: 50px;
}

.container {
  margin-top: 0;
  margin-bottom: 0;
}

.news {
  text-align: center;
}

h3 {
  margin-bottom: 40px;
}

.news-block {
  position: relative;
  display: flex;
  height: 100px;
  padding: 20px 0;
  border-top: 1px solid #e9e9e9;
  text-align: left;
  overflow: hidden;
  cursor: default;
  .thumbnail {
    flex: 0 0 25%;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .image {
    height: 100%;
    width: 100%;
    background-size: cover;
    filter: grayscale(100%);
    transition: all .3s ease;
  }
  .title {
    flex: 0 0 55%;
    padding-left: 5%;
    display: flex;
    align-items: center;
    font-size: 3.5rem;
  }
  .subtitle {
    flex: 0 0 20%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 1.4rem;
    opacity: 0;
    transition: all .3s;
  }
  &:hover {
    .image {
      transform: scale(1.2);
      filter: grayscale(0%);
    }
    .subtitle {
      opacity: 1;
      animation: fadeInUp;
      animation-duration: .5s;
    }
  }
}

.news-1 .image, .news-3 .image {
  background-image: url(../assets/image/news01.jpg);
}

.news-2 .image, .news-4 .image {
  background-image: url(../assets/image/news02.jpg);
}

.news-3 .image, .news-4 .image {
  background-position: 50% 50%;
}

@media (max-width: 768px) {
  #news {
    margin-bottom: 425px;
  }
  .container {
    margin-bottom: 0;
    height: 115px;
  }
  .all-news {
    display: flex;
    flex-wrap: wrap;
  }
  .news-block {
    flex: 0 0 100%;
    .thumbnail {
      flex: 0 0 100%;
      .image {
        filter: grayscale(0%);
      }
    }
    .title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .subtitle {
      display: none;
    }
    &:hover {
      .image {
        transform: scale(1);
      }
    }
  }
}
</style>
