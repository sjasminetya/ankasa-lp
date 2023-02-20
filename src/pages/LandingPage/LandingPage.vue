<template>
  <div class="parent">
    <NavbarComponent />
    <section class="jumbotron position-relative container-fluid">
      <div class="row">
        <div class="col-7 p-0">
          <div style="margin-left: 180px">
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
      <div class="search-destination position-absolute">
        <p>Hey,</p>
        <h6>Where you want to go?</h6>
        <div class="d-flex align-items-center justify-content-between mt-3">
          <p class="recently-searched">Recently Searched</p>
          <img
            class="w-20 h-20"
            src="../../assets/icons/ic-arrow-right.svg"
            alt="arrow"
          />
        </div>
        <div class="transfer">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span>From</span>
              <h3>Medan</h3>
              <p>Indonesia</p>
            </div>
            <img
              class="ic-transfer"
              src="../../assets/icons/ic-transfer.svg"
              alt="transfer"
            />
            <div>
              <span>From</span>
              <h3>Tokyo</h3>
              <p>Japan</p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <button
              class="btn-one-way d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/icons/ic-plane.svg" alt="plane" />
              One way
            </button>
          </div>
          <div class="col-6">
            <button
              class="btn-round-trip d-flex justify-content-center align-items-center"
            >
              <img src="../../assets/icons/ic-reload.svg" alt="reload" />
              Round trip
            </button>
          </div>
        </div>
        <div class="departure mt-3">
          <p>Departure</p>
          <button
            class="btn-departure d-flex justify-content-between align-items-center"
          >
            Monday, 20 July 2020
            <img
              class="w-10 h-10"
              src="../../assets/icons/ic-arrow-right.svg"
              alt="arrow"
            />
          </button>
        </div>
        <div class="row mt-3 passenger">
          <p>How many person</p>
          <div class="col-6">
            <button
              class="btn-passenger d-flex justify-content-between align-items-center"
            >
              2 Child
              <img
                class="w-10 h-10"
                src="../../assets/icons/ic-arrow-right.svg"
                alt="arrow"
              />
            </button>
          </div>
          <div class="col-6">
            <button
              class="btn-passenger d-flex justify-content-between align-items-center"
            >
              4 Adult
              <img
                class="w-10 h-10"
                src="../../assets/icons/ic-arrow-right.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div class="row mt-3 class">
          <p>Which class do you want?</p>
          <div class="col-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="economy"
                id="economy"
                checked
              />
              <label class="form-check-label" for="economy"> Economy </label>
            </div>
          </div>
          <div class="col-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="business"
                id="business"
              />
              <label class="form-check-label" for="business"> Business </label>
            </div>
          </div>
          <div class="col-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="firstClass"
                id="firstClass"
              />
              <label class="form-check-label" for="firstClass">
                First Class
              </label>
            </div>
          </div>
        </div>
        <button
          class="btn-search-flight d-flex align-items-center justify-content-between mt-3"
        >
          SEARCH FLIGHT
          <img src="../../assets/icons/ic-arrow-right-2.svg" alt="arrow" />
        </button>
      </div>
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
          class="d-flex flex-column justify-content-center align-items-center h-full z-10"
        >
          <p>Top 10</p>
          <h6>Top 10 destinations</h6>
          <div class="row">
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

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProfileComponent,
  },
};
</script>

<style scoped>
@import url(./styles.css);
</style>
