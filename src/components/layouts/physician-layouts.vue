<template>
  <div id="backendPhysician">
    <div class="wrapper">
      <Header />
      <SidebarPhysician />
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
import SidebarPhysician from "./../shared/sidebarPhysician";
import Footer from "./../shared/footer";
export default {
  name: "backendPhysician",
  components: {
    Header,
    SidebarPhysician,
    Footer,
  },
};
</script>
