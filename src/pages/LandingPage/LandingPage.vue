<template>
  <div class="parent">
    <NavbarComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/elements/NavbarComponent/NavbarComponent.vue";
import FooterComponent from "../../components/elements/FooterComponent/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import url(./styles.css);
</style>
