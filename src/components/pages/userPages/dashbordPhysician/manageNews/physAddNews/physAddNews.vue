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
              <form v-on:submit.prevent="addNews">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>หัวข้อข่าว</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="title"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ข้อมูลข่าว</label>
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
import physicianService from './../../../../../services/physician';
export default {
  data() {
    return {
      title: "",
      detail: "",
      status: "1",
      uuid_user: "",
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
    async addNews() {
      try {
        const uuid = sessionStorage.getItem("uuid");
        const newForm = {
          title: this.title,
          detail: this.detail,
          status: "1",
          uuid_user: uuid,
          img: this.img,
        };
        const resp = await physicianService.addNews(newForm);
        console.log(resp);
        alert("เพิ่มสำเร็จ");
        this.$router.push("/physNews");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
