<template>
  <div id="backendPhysician">
    <div class="wrapper">
      <Header />
      <sidebarMember/>
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
import sidebarMember from "./../shared/sidebarMember";
import Footer from "./../shared/footer";
export default {
  name: "backendPhysician",
  components: {
    Header,
    sidebarMember,
    Footer,
  },
};
</script>
