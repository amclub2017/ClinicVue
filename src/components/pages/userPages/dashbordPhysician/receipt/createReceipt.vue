<template>
  <div id="member">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title"><i class="fas fa-user-plus"></i> ออกใบเสร็จ</h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="addQueue">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>รหัสผู้ป่วย</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="symptom"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ข้อมูลทั่วไป</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="symptom"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ราคา</label>
                    <textarea
                      class="form-control"
                      v-model="symptom_detail"
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
import physicianService from "./../../../../services/physician";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      id_card: "",
      password: "",
      address: "",
      email: "",
      sex: "",
      weight: "",
      height: "",
      phone: "",
      age: "",
      religion: "",
      blood_type: "",
      date_of_birth: "",
      role: "member",
    };
  },
  methods: {
    async createMember() {
      console.log("asd");
      try {
        const memberForm = {
          first_name: this.first_name,
          last_name: this.last_name,
          id_card: this.id_card,
          password: this.password,
          address: this.address,
          email: this.email,
          sex: this.sex,
          weight: this.weight,
          height: this.height,
          phone: this.phone,
          age: this.age,
          religion: this.religion,
          blood_type: this.blood_type,
          date_of_birth: this.date_of_birth,
          role: "member",
        };
        const resp = await physicianService.addMember(memberForm);
        console.log(resp);
        alert("เพิ่มสำเร็จ");
        this.$router.push("/physMember");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
