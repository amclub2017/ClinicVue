<template>
  <div>
    <p>Officer</p>
  </div>
</template>
<script>
import userService from "./../../../services/user";
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.profileOfficer();
  },
  methods: {
    async profileOfficer() {
      const resp = await userService.getprofileOfficer();
      sessionStorage.setItem("uuid", resp.data.uuid);
      console.log(resp);
    },
  },
};
</script>