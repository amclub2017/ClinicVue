<template>
  <div id="app-backend">
    <div class="wrapper">
      <Header />
      <Sidebar />
      <div class="content-wrapper">
        <div class="main-content">
             <router-view />
        </div>
      </div>
  
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "./../shared/header";
import Footer from "./../shared/footer";
import Sidebar from "./../shared/sidebar";
export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>