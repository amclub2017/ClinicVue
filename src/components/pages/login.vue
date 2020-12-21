<template>
  <div id="login">
    <div class="row mt-5">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <!-- <div class="text-center mb-4">
          <img src="assets/images/logos/s2.png" class="rounded" alt="..." height="90" />
        </div> -->
        <div class="text-center">
          <img class="logo" width="100" height="100" />
        </div>
        <div class="card my-5">
          <div class="card-body mb-3 mt-3">
            <form>
              <div class="mb-3">
                <label class="form-label">อีเมล</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="กรอกอีเมล"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">รหัสผ่าน</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="รหัสผ่าน"
                  v-model="password"
                />
              </div>
              <button
                @click.prevent="login"
                type="submit"
                class="btn btn-primary float-right"
              >
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "./../services/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    async login() {
      try {
        const loginForm = {
          email: this.email,
          password: this.password,
        };
        const resp = await authService.loginAdmin(loginForm);
        localStorage.setItem("access_token", resp.access_token);
        if (resp.role == "physician") {
          this.$router.push("/dashbordPhysician");
        }
        if (resp.role == "officer") {
          this.$router.push("/dashbordOfficer");
        }
        if (resp.role == "member") {
          this.$router.push("/dashbordMember");
        }
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
