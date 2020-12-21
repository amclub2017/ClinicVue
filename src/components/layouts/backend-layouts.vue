<template>
  <div id="backend">
    <div class="wrapper">
      <Header />
      <Sidebar />
      <div class="main-panel">
        <div class="container">
          <router-view></router-view>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../shared/header";
import Sidebar from "./../shared/sidebar";
import Footer from "./../shared/footer";
export default {
  name: "backend",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style></style>
