<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">Clinic</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="btn">
            <router-link class="text-white" to="/login"
              >เข้าสู่ระบบ</router-link
            >
          </a>
          <div class="text-white">|</div>
          <a class="btn text-white" href="#">ติดต่อ </a>
        </form>
      </div>
    </nav>
    <div class="container mt-2">
      <div class="bd-example">
        <img
          class="shadow"
          src="https://th.bing.com/th/id/OIP.G7yoL4N9E1zXlpj6iOkBLwHaEe?pid=Api&rs=1"
          alt=""
          width="100%"
          height="300"
        />
      </div>
      <div class="card mt-3">
        <div class="card-header">
          <h1>ข่าวสาร</h1>
        </div>
        <div v-for="data in news" v-bind:key="data.id">
          <div class="card-body">
            <div class="card mb-3 shadow">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <div class="container">
                    <img v-bind:src="data.img" class="card-img" />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ data.title }}</h5>
                    <p class="card-text">{{ data.detail }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
  </div>
</template>
<script>
import userService from "./../../services/user";
export default {
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const resp = await userService.getallNews();
      this.news = resp.data;
      console.log(resp);
    },
  },
};
</script>
