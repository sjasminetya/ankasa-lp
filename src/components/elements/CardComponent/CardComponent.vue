<template>
  <div class="card">
    <div class="p-3">
      <img :src="imageUrl(cardImage)" class="card-img-top" alt="city" />
    </div>
    <div class="card-body">
      <p class="card-title">{{ city }}</p>
      <div class="d-flex justify-content-between algin-items-center">
        <h5 class="card-text">{{ country }}</h5>
        <div
          class="arrow-right d-flex justify-content-center align-items-center"
        >
          <img src="../../../assets/icons/ic-arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardImage: String,
    city: String,
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
