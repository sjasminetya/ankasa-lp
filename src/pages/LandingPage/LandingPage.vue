<template>
  <div class="parent">
    <NavbarComponent />
    <section class="jumbotron position-relative container-fluid jumbotron-browser">
      <div class="row">
        <div class="col-7 p-0">
          <div class="jumbotron-title" style="margin-left: 180px">
            <h1>Find your <span class="flight">Flight</span></h1>
            <p>and explore the world with us</p>
          </div>
          <div class="gradient-image-left">
            <img
              class="img-jumbotron-left"
              src="../../assets/images/jumbotron-1.png"
              alt="jumbotron"
            />
          </div>
        </div>
        <div class="col-5 p-0 d-flex flex-column justify-content-between">
          <div class="gradient-image-right align-self-end" style="float: right">
            <img
              class="img-jumbotron-right"
              src="../../assets/images/jumbotron-2.png"
              alt="jumbotron"
            />
          </div>
          <img
            class="il-jumbotron align-self-center"
            src="../../assets/images/il-jumbotron.png"
            alt="il-jumbotron"
          />
        </div>
      </div>
      <CardSearch />
    </section>
    <section class="jumbotron-mobile">
      <CardSearch />
    </section>
    <div class="container">
      <section class="trending">
        <p>Trending</p>
        <div class="d-flex justify-content-between">
          <h6>Trending destinations</h6>
          <span>View all</span>
        </div>
        <div class="row">
          <div class="col">
            <CardComponent cardImage="japan.png" city="Tokyo" country="Japan" />
          </div>
          <div class="col">
            <CardComponent
              cardImage="spain.png"
              city="Barcelona"
              country="Spain"
            />
          </div>
          <div class="col">
            <CardComponent cardImage="japan.png" city="Tokyo" country="Japan" />
          </div>
          <div class="col">
            <CardComponent
              cardImage="spain.png"
              city="Barcelona"
              country="Spain"
            />
          </div>
          <div class="col">
            <CardComponent cardImage="japan.png" city="Tokyo" country="Japan" />
          </div>
        </div>
      </section>
      <section class="top-destination position-relative">
        <div
          class="d-flex flex-column justify-content-center align-items-center h-full z-10 px-3"
        >
          <p>Top 10</p>
          <h6>Top 10 destinations</h6>
          <div class="row gap-2">
            <div class="col">
              <ProfileComponent profileImage="paris.png" country="paris" />
            </div>
            <div class="col">
              <ProfileComponent profileImage="bali.png" country="bali" />
            </div>
            <div class="col">
              <ProfileComponent
                profileImage="singapore.png"
                country="singapore"
              />
            </div>
            <div class="col">
              <ProfileComponent profileImage="agra.png" country="agra" />
            </div>
            <div class="col">
              <ProfileComponent profileImage="sydney.png" country="sydney" />
            </div>
          </div>
          <div class="d-flex align-items-center gap-3 mt-5">
            <button class="btn-arrow-left">
              <img src="../../assets/icons/ic-arrow-left.svg" alt="arrow" />
            </button>
            <button class="btn-arrow-right">
              <img src="../../assets/icons/ic-arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <img
          src="../../assets/images/il-plane.png"
          alt="plane"
          class="position-absolute bottom-0 left-0 il-plane"
        />
      </section>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/elements/NavbarComponent/NavbarComponent.vue";
import FooterComponent from "../../components/elements/FooterComponent/FooterComponent.vue";
import CardComponent from "../../components/elements/CardComponent/CardComponent.vue";
import ProfileComponent from "../../components/elements/ProfileComponent/ProfileComponent.vue";
import CardSearch from "../../components/elements/CardSearch/CardSearch.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProfileComponent,
    CardSearch
  },
};
</script>

<style scoped>
@import url(./styles.css);
</style>
