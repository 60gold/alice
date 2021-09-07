<template>
  <div id="contact-us">
    <div class="container">
      <div class="logo-ani logo-ani1">
        <div class="inner">
          <span>Alice．ToDream．Alice．ToDream．</span>
        </div>
        <div class="inner">
          <span>Alice．ToDream．Alice．ToDream．</span>
        </div>
      </div>

      <div class="contact-box">
        <h3>- 聯絡我們 -</h3>
        <input id="contact-input" type="text" placeholder="來說悄悄話⋯" @click="clearAnimate" />
        <button @click="clearInput">送出</button>
      </div>

      <div class="logo-ani logo-ani2">
        <div class="inner">
          <span>Alice．ToDream．Alice．ToDream．</span>
        </div>
        <div class="inner">
          <span>Alice．ToDream．Alice．ToDream．</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us",
  props: {},
  methods: {
    clearInput() {
      if(document.getElementById("contact-input").value != '') {
        document.getElementById("contact-input").className = "animate__animated animate__pulse";
        setTimeout(() => {
          document.getElementById("contact-input").value = "";
        }, 1000);
      }
    },
    clearAnimate() {
      document.getElementById("contact-input").className = "";
    },
  },
};
</script>

<style lang="less" scoped>
#contact-us {
  transform-style: preserve-3d;
}

.container {
  margin-top: 150px;
  margin-bottom: 170px;
}

.logo-ani {
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  overflow: hidden;
  font-size: 6vw;
  letter-spacing: 2px;
  cursor: default;
}

.logo-ani1 {
  top: -20%;
}

.logo-ani2 {
  bottom: -25%;
}

.logo-ani .inner {
  flex: 0 0 100%;
  width: 100%;
  height: 200px;
  overflow: hidden;
  white-space: nowrap;
}

.logo-ani .inner span {
  position: absolute;
  animation: roll 70s linear infinite;
}

.logo-ani .inner:first-child span {
  animation-delay: 35s;
  left: -100%;
}

@keyframes roll {
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
}

.contact-box {
  display: flex;
  padding: 7% 10%;
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #2b2727;
  h3 {
    flex: 0 0 100%;
    text-align: center;
    color: #fff;
  }
  input {
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 10px;
    width: 100%;
    height: 60px;
    border: 1px solid #fff;
    outline: none;
    background: transparent;
    font-size: 30px;
    color: #fff;
  }
  button {
    padding: 10px;
    width: 100%;
    flex: 0 0 100%;
    border: none;
    border-radius: none;
    font-size: 25px;
    font-weight: 700;
    color: #690a0a;
    background: #fff;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #af5656;
    }
  }
}

@media (max-width: 1200px) {
  .logo-ani {
    letter-spacing: 1px;
    .inner {
      height: 100px;
    }
  }
}

@media (max-width: 768px) {
  #contact-us {
    margin-top: 190px;
  }
  .logo-ani {
    font-size: 5vw;
    letter-spacing: 1px;
    .inner {
      height: 50px;
    }
    .inner span {
      animation: roll 30s linear infinite;
    }
    .inner:first-child span {
      animation-delay: 15s;
    }
  }
  .contact-box {
    padding: 20% 15%;
    width: 90%;
    input {
      margin-top: 30px;
      height: 45px;
      font-size: 20px;
    }
    button {
      padding: 5%;
      &:hover {
        color: #690a0a;
        background: #fff;
      }
    }
  }
}
</style>
