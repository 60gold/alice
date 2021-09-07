<template>
  <div id="footer">
    <div class="container">
      <div class="search">
        <i class="icon-facebook"></i>
        <a href="https://www.facebook.com/AliceToDream" class="searchbar" target="_blank">
          <i class="icon-search"></i>
          <h2>Alice．ToDream</h2>
        </a>
      </div>
      <div class="copyright">
        <h3>&#64; 2021 ALICE.STUDIO / WENYU</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-footer",
  props: {},
};
</script>

<style lang="less" scoped>
#footer {
  width: 100%;
  background-image: linear-gradient(to top, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 80%),
                    linear-gradient(to bottom, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 80%),
                    linear-gradient(to left, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 60%),
                    linear-gradient(to right, rgba(16,19,22,1) 0%,rgba(16,19,22,1) 5%,rgba(16,19,22,0) 60%),
                    url(../assets/image/banner02.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  position: relative;
  margin-bottom: 0;
  padding-bottom: 45px;
}

.search {
  margin-top: 50px;
  margin-bottom: 150px;
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
  a.searchbar {
    margin-left: 15px;
    padding: 5px 20px 5px 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 5rem;
    color: #000;
    background: #e9e9e9;
    i {
      font-size: 5rem;
    }
    h2 {
      line-height: 1;
    }
  }
  i {
  font-size: 7rem;
 }
}

.copyright {
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .container {
    margin-top: 0;
  }
  .search {
    margin-bottom: 40px;
    a.searchbar {
      margin-left: 0;
      padding: 5px;
      h2 {
        font-size: 2rem;
      }
      i {
        font-size: 2rem;
      }
    }
    i {
      font-size: 3rem;
    }
  }
  .copyright h3 {
    font-size: 1.5rem;
  }
}
</style>
