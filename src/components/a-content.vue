<template>
  <div id="content">
    <about></about>
    <service></service>
    <recommend></recommend>
    <news></news>
    <maps></maps>
    <contact-us></contact-us>
  </div>
</template>

<script>
import About from "./about.vue";
import Service from "./service.vue";
import Recommend from "./recommend.vue";
import News from "./news.vue";
import Maps from "./maps.vue";
import ContactUs from "./contact-us.vue";

export default {
  name: "a-content",
  components: {
    About,
    Service,
    Recommend,
    News,
    Maps,
    ContactUs,
  },
  props: {},
};
</script>

<style lang="less" scoped>
#content {
  width: 100%;
}
</style>
