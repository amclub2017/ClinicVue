<template>
  <div>
    <p>Physician</p>
  </div>
</template>
<script>
import physicianService from "./../../../services/physician";
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.profilePhysician();
  },
  methods: {
    async profilePhysician() {
      const resp = await physicianService.getprofileOfficer();
      sessionStorage.setItem("uuid", resp.data.uuid);
      console.log(resp);
    },
  },
};
</script>