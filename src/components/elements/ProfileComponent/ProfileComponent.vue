<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="parent-profile d-flex justify-content-center align-items-center"
    >
      <img :src="imageUrl(profileImage)" alt="profile" />
    </div>
    <p>{{ country }}</p>
  </div>
</template>

<script>
export default {
  props: {
    profileImage: String,
    country: String,
  },
  methods: {
    imageUrl(image) {
      return new URL(`../../../assets/images/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
@import url(./styles.css);
</style>
