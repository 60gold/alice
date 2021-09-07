<template>
  <div id="service">
    <div class="container">
      <h3>- 遊戲簡介 -</h3>
      <h4 class="m-bot-30">《Alice．ToDream》</h4>
      <h4>1-2小時的沉浸式劇情體驗<br>——<br>實際操作的解謎及關鍵物品收集<br>——<br>彷彿身歷其境的VR場景與音效<br>——<br>一個隨著你做出的決定而改變的故事<br>——<br>支援 1 人遊玩<br>——<br>僅提供中文語音及字幕<br>——<br>需使用HTC VIVE VR設備</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
  props: {},
};
</script>

<style lang="less" scoped>
#service {
  width: 100%;
  background-image: linear-gradient(to top, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 50%),
                    linear-gradient(to bottom, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 50%),
                    linear-gradient(to left, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 40%),
                    linear-gradient(to right, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 40%),
                    url(../assets/image/banner01.jpg);
  background-repeat: no-repeat;
}

.container {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 120px;
  padding-bottom: 120px;
  flex-direction: column;
}

h3 {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .container {
    margin-bottom: 0;
  }
}
</style>
