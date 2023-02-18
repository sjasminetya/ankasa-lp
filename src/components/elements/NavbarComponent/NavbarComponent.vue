<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <div class="d-flex align-items-center">
        <img src="../../../assets/images/logo.png" alt="logo" />
        <h5 class="mb-0">Ankasa</h5>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex ms-auto" role="search">
          <input
            class="form-control search me-5 position-relative"
            type="search"
            placeholder="Where you want to go?"
            aria-label="Search"
          />
          <img
            class="position-absolute icon-search"
            src="../../../assets/icons/ic-search.svg"
            alt="search"
          />
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Find Ticket</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">My Booking</a>
          </li>
        </ul>
        <button class="btn btn-sign-up me-2" type="button">Sign Up</button>
      </div>
    </div>
  </nav>
</template>

<style>
@import url("./styles.css");
</style>
