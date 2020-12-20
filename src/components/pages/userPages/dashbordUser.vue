<template>
  <div>
    <p>User</p>
  </div>
</template>

<script>
import userService from "./../../services/user";
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.profileUser();
  },
  methods: {
    async profileUser() {
      const resp = await userService.getprofileUser();
      console.log(resp);
    },
  },
};
</script>
