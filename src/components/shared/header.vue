<template>
  <div id="app">
    <header class="main-header">
      <!-- Logo Header -->
      <div class="logo-header" data-background-color="blue">
        <a class="logo">Clinic</a>
        <button
          class="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="icon-menu"></i>
          </span>
        </button>
        <button class="topbar-toggler more">
          <i class="icon-options-vertical"></i>
        </button>
        <div class="nav-toggle">
          <button class="btn btn-toggle toggle-sidebar">
            <i class="icon-menu"></i>
          </button>
        </div>
      </div>

      <nav
        class="navbar navbar-header navbar-expand-lg"
        data-background-color="blue2"
      >
        <div class="container-fluid">
          <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
            <div style="font-size: 25px" class="row">
              <div>
                <h6 class="mr-4" style="color: white">
                  <i
                    class="fa fa-user-circle-o fa-2x pr-2"
                    aria-hidden="true"
                  ></i>
                  ตำเเหน่ง: {{ role }}
                </h6>
              </div>
            </div>
            <div>
              <span style="margin: 50"></span>
            </div>

            <button class="btn btn-danger btn-sm" @click="logout">
              <i class="fas fa-sign-out-alt"></i> Logout
            </button>
          </ul>
        </div>
      </nav>
      <!-- End Navbar -->
    </header>
  </div>
</template>
<script>
import userService from "./../services/user";
import memberService from "./../services/member";
export default {
  data() {
    return {
      role: "",
    };
  },
  mounted() {
    this.profileOfficer();
    this.profilePhysician();
    this.profilePMember();
  },
  methods: {
    async profileOfficer() {
      const resp = await userService.getprofileOfficer();
      console.log(resp);
      this.role = resp.data.role;
    },
    async profilePhysician() {
      const resp = await userService.getprofilePhysician();
      this.role = resp.data.role;
      console.log(resp);
    },
    async profilePMember() {
      const resp = await memberService.getprofileMember();
      this.role = resp.data.role;
       console.log(resp);
    },
    logout() {
      const removeToken = localStorage.removeItem("access_token");
      if (removeToken == null) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
