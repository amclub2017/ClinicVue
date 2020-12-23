<template>
  <div id="app">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fas fa-user-plus"></i> เพิ่มอุปกรณ์
        </h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="createPhysician">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>ชื่อ</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ข้อมูลอุปกรณ์</label>
                    <textarea
                      type="text"
                      class="form-control"
                      v-model="detail"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputCity">จำนวน</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputCity"
                      v-model="qty"
                      required
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">อัพโหลดภาพ</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="uploadImg"
                      required
                    />
                  </div>
                  <img v-bind:src="img" width="100" />
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
import userService from "./../../../../../../services/user";
export default {
  data() {
    return {
      name: "",
      detail: "",
      status: "1",
      uuid_user: "",
      qty: "",
      img: "",
    };
  },
  methods: {
    uploadImg(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.img = reader.result;
      };
      reader.readAsDataURL(file);
    },
    async createPhysician() {
      try {
        const uuid = sessionStorage.getItem("uuid");
        console.log(uuid);
        const equipmentForm = {
          name: this.name,
          detail: this.detail,
          status: "1",
          uuid_user: uuid,
          qty: this.qty,
          img: this.img,
        };
        const resp = await userService.addEquipment(equipmentForm);
        console.log(resp);
        alert("เพิ่มสำเร็จ");
        // this.$router.push("/equipment");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
