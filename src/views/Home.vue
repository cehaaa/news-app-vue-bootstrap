<template>
  <div>
    <!-- heading -->

    <b-container fluid class="px-5 py-4 bg-warning ">
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <div class="display-3">
            Where good ideas <br />
            find you
          </div>
          <div class="mt-5">
            Read and share new perspective on just any topic. Everyone's <br />
            welcome.
            <router-link to="/news" class="text-dark">
              <u>Learn More</u>
            </router-link>
          </div>
          <div class="mt-4">
            <button class="btn  btn-outline-dark">
              Get Started
            </button>
          </div>
        </b-col>
        <b-col
          sm="12"
          md="12"
          lg="6"
          class="d-flex justify-content-center align-items-center"
        >
          <img src="@/assets/logo.png" alt="" class="img-fluid m-img" />
        </b-col>
      </b-row>
    </b-container>

    <!-- end heading -->

    <!-- news -->

    <b-container fluid class="px-5 py-4">
      <b-row class="py-4">
        <b-col>
          <b class=" text-uppercase text-muted">trending on news app</b>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="12" lg="12">
          <News :filterKey="filterKey"></News>
        </b-col>
        <!-- <b-col>
          <b class="text-uppercase text-muted">
            discover more of what matters to you
          </b>
          <div>
            <b-button variant="primary" @click="filterNews('halloooooo')"
              >a</b-button
            >
          </div>
        </b-col> -->
      </b-row>
    </b-container>

    <!-- end news -->
  </div>
</template>

<script>
import news from "@/components/News";

export default {
  data() {
    return {
      filterKey: "",
    };
  },
  components: {
    News: news,
  },
  methods: {
    filterNews(e) {
      e.preventDefault;
      this.filterKey = e;
    },
  },
};
</script>

<style>
@media (max-width: 576px) {
  .m-img {
    display: none;
  }
}

.static {
  position: static;
  top: 200;
}
</style>
