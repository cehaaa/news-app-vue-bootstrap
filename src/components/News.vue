<template>
  <div>
    <!-- <h1>{{ filterKey }}</h1>
    <div v-if="!filterKey">
      <h1>tidak ada props</h1>
    </div>
    <div v-if="filterKey"> -->
    <div v-for="n in news" :key="n.title" class="py-2">
      <b-row class="mb-4">
        <b-col sm="12" md="12" lg="7" class="text-justify">
          <b class="text-muted">{{ n.author }}</b>
          <h3 class="mt-3">{{ n.title }}</h3>
          <p class="word-break text-muted">{{ n.description }}</p>
          <div class="mt-4 d-flex">
            <p class="text-muted text-monospace">
              {{ n.publishedAt.substring(0, 10) }}
            </p>
            <div class="ml-auto">
              <router-link to="" class="text-dark mr-4">
                <u>Read more</u>
              </router-link>

              <!-- save SVG -->

              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-bookmark cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                @click="addToBookmark()"
                :class="{ 'd-none': isSave }"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
              </svg>

              <!-- end save SVG -->

              <!-- saved SVG -->

              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-bookmark-fill cursor-pointer d-none "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                @click="addToBookmark()"
                :class="{ 'd-inline': isSave }"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"
                />
              </svg>

              <!-- end saved SVG -->
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4" class="mb-5">
          <div>
            <img :src="n.urlToImage" alt="" class=" img-fluid rounded-lg" />
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import api from "@/utils/api";

export default {
  props: ["filterKey"],
  data() {
    return {
      news: [],
      isSave: false,
      loading: false,
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const res = await api.get(
        "http://newsapi.org/v2/everything?q=apple&from=2020-10-28&to=2020-10-28&sortBy=popularity&apiKey=47b330d317ac43718ca4ba89ed172861"
      );
      if (res.data.status == "ok") {
        this.news = res.data.articles;
      }
    },
    addToBookmark() {
      if (this.isSave) {
        this.isSave = false;
      } else {
        this.isSave = true;
      }
    },
  },
};
</script>

<style>
.word-break {
  word-wrap: break-word;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
