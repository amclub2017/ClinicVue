<template>
  <div id="app">
    <footer>
      <!-- Sidebar -->
      <div class="sidebar sidebar-style-2">
        <div class="sidebar-wrapper">
          <div class="sidebar-content">
            <ul class="nav nav-primary">
              <li class="nav-item">
                <router-link to="/dashbordOfficer" data-toggle="collapse">
                  <i class="fas fa-home"></i>
                  <p>หน้าหลัก</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a
                  data-toggle="collapse"
                  href="#user"
                  class="collapsed"
                  aria-expanded="false"
                >
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <p>จัดการข้อมูล</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="user">
                  <ul class="nav nav-collapse">
                    <li>
                      <router-link to="/physician" class="nav-item">
                        <span class="sub-item"></span>
                        <p>จัดการข้อมูลเเพทย์</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="nav-item">
                        <span class="sub-item"></span>
                        <p>จัดการข้อมูลผู่ป่วย</p>
                      </router-link>
                      <router-link to="#" class="nav-item">
                        <span class="sub-item"></span>
                        <p>จัดการอุปกรณ์</p>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Sidebar -->
    </footer>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    clicktof5() {
      location.reload();
    },
  },
  computed: {},
};
</script>
<style></style>
