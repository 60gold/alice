<template>
  <div id="recommend">
    <h3>- 更多回饋 -</h3>
    <ul ref="ul" @mousedown="start" @mouseleave="leave" @mouseup="stop" @mousemove="move">
      <li v-for="(comment, index) in $store.state.comments" :key="index">
        <div class="writter">
          <div class="photo">{{ comment.photo }}</div>
          <h5 class="name">{{ comment.name }}</h5>
        </div>
        <h5>{{ comment.content }}</h5>
        <div class="star">
          <i class="icon-star"></i><i class="icon-star"></i
          ><i class="icon-star"></i><i class="icon-star"></i
          ><i class="icon-star"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {},
  data() {
    return {
      canDrag: false,
      x0: 0,
      x1: 0,
      isDown: false,
      startX: 0,
      scrollLeft: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    start(e) {
      this.isDown = true;
      this.$refs.ul.className = 'active';
      this.startX = e.pageX - this.$refs.ul.offsetLeft;
      this.scrollLeft = this.$refs.ul.scrollLeft;
    },
    leave() {
      this.isDown = false;
      this.$refs.ul.className = '';
    },
    stop() {
      this.isDown = false;
      this.$refs.ul.className = '';
    },
    move(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.ul.offsetLeft;
      const walk = (x - this.startX) * 3; //scroll-fast
      this.$refs.ul.scrollLeft = this.scrollLeft - walk;
      // console.log(walk);
    },
    handleScroll() {
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let recommendAnimate = document.querySelector('#recommend');
      let recommendAnimateHeight = recommendAnimate.offsetTop;
      if (windowHeight + scrollHeight > recommendAnimateHeight) {
        recommendAnimate.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        recommendAnimate.classList.remove('animate__animated', 'animate__slideInUp');
      }
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
#recommend {
  margin-bottom: 100px;
  padding: 30px;
  width: 100%;
}

h3 {
  text-align: center;
  margin-bottom: 30px;
}

ul {
  list-style: none;
  width: 100%;
  height: 550px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  transform: scale(1);
  user-select: none;
  cursor: pointer;
  color: #fff;

  padding-bottom: 40px;
  margin-bottom: -30px;
  -webkit-clip-path: inset(0 0 30px 0);
  clip-path: inset(0 0 30px 0);
}

ul.active {
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1.1);
}

li {
  display: inline-block;
  margin: 5px;
  padding: 2% 3%;
  width: 400px;
  height: 550px;
  text-align: left;
  overflow: hidden;
  word-wrap:break-word;
  background-color: #343434;
}

.writter {
  display: flex;
  margin-bottom: 3rem;
  .photo {
    margin-right: 1.5rem;
    height: 45px;
    width: 45px;
    border: 2px solid #aaa;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
  }
  h5.name {
    line-height: 40px;
    letter-spacing: 2px;
  }
}

h5 {
  white-space: normal;
  font-size: 1.4rem;
  line-height: 2;
}

.star {
  position: absolute;
  bottom: 10%;
  margin-top: 1.5rem;
  i {
    color: #ffda44;
    font-size: 20px;
  }
  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    margin-left: 0;
    margin-right: 0.4em;
  }
}

@media (max-width:768px) {
  ul {
    padding-left: 0;
    height: 600px;
  }
  ul.active {
    transform: scale(1);
  }
  li {
    padding: 10% 8%;
    width: 275px;
    height: 600px;
  }
}
</style>
