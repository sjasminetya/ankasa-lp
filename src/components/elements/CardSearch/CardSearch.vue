<template>
  <div class="search-destination">
    <p>Hey,</p>
    <h6>Where you want to go?</h6>
    <div class="d-flex align-items-center justify-content-between mt-3">
      <p class="recently-searched">Recently Searched</p>
      <img class="w-20 h-20" src="../../../assets/icons/ic-arrow-right.svg" alt="arrow" />
    </div>
    <div class="transfer">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span>From</span>
          <h3>Medan</h3>
          <p>Indonesia</p>
        </div>
        <img class="ic-transfer" src="../../../assets/icons/ic-transfer.svg" alt="transfer" />
        <div>
          <span>From</span>
          <h3>Tokyo</h3>
          <p>Japan</p>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-6">
        <button class="btn-one-way d-flex justify-content-center align-items-center">
          <img src="../../../assets/icons/ic-plane.svg" alt="plane" />
          One way
        </button>
      </div>
      <div class="col-6">
        <button class="btn-round-trip d-flex justify-content-center align-items-center">
          <img src="../../../assets/icons/ic-reload.svg" alt="reload" />
          Round trip
        </button>
      </div>
    </div>
    <div class="departure mt-3">
      <p>Departure</p>
      <button class="btn-departure d-flex justify-content-between align-items-center">
        Monday, 20 July 2020
        <img class="w-10 h-10" src="../../../assets/icons/ic-arrow-right.svg" alt="arrow" />
      </button>
    </div>
    <div class="row mt-3 passenger">
      <p>How many person</p>
      <div class="col-6">
        <button class="btn-passenger d-flex justify-content-between align-items-center">
          2 Child
          <img class="w-10 h-10" src="../../../assets/icons/ic-arrow-right.svg" alt="arrow" />
        </button>
      </div>
      <div class="col-6">
        <button class="btn-passenger d-flex justify-content-between align-items-center">
          4 Adult
          <img class="w-10 h-10" src="../../../assets/icons/ic-arrow-right.svg" alt="arrow" />
        </button>
      </div>
    </div>
    <div class="row mt-3 class">
      <p>Which class do you want?</p>
      <div class="col-4">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="economy" id="economy" checked />
          <label class="form-check-label" for="economy"> Economy </label>
        </div>
      </div>
      <div class="col-4">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="business" id="business" />
          <label class="form-check-label" for="business"> Business </label>
        </div>
      </div>
      <div class="col-4">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="firstClass" id="firstClass" />
          <label class="form-check-label" for="firstClass">
            First Class
          </label>
        </div>
      </div>
    </div>
    <button class="btn-search-flight d-flex align-items-center justify-content-between mt-3">
      SEARCH FLIGHT
      <img src="../../../assets/icons/ic-arrow-right-2.svg" alt="arrow" />
    </button>
  </div>
</template>

<style scoped>
@import url(./styles.css);
</style>