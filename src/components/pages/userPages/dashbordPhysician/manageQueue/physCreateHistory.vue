<template>
  <div id="physAddnews">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fas fa-user-plus"></i> เพิ่มข่าวสาร
        </h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="addHistory">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>เพิ่มประวัติการรักษาผู้ป่วย</label>
                    <textarea
                      type="text"
                      class="form-control"
                      v-model="treatment_details"
                      rows="10"
                      placeholder="add..."
                      required
                    />
                  </div>
                </div>
              
                <button type="submit" class="btn btn-primary float-right">
                  บันทึก
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import physicianService from './../../../../services/physician';
export default {
  data() {
    return {
      treatment_details: "",
      uuid_physicain: "",
    };
  },
  methods: {
    async addHistory() {
      try {
        const uuid = sessionStorage.getItem("uuid");
        const historyForm = {
          treatment_details: this.treatment_details,
          uuid_physicain: uuid,
        };
        const resp = await physicianService.addHistory(historyForm);
        console.log(resp);
        alert("เพิ่มสำเร็จ");
        this.$router.push("#");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
