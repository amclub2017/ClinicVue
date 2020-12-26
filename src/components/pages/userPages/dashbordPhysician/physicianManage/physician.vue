<template>
  <div>
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title"><i class="fas fa-user-plus"></i> จัดการข้อมูลส่วนตัวเเพทย์</h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="updatePhysician">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="first_name">ชื่อ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="first_name"
                      v-model="first_name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">นามสกุล</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      v-model="last_name"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    
                  </div>
                  <div class="form-group col-md-6">
                    <label>หมายเลขบัตรประจำตัว</label>
                    <input
                      type="number"
                      class="form-control"
                      id="id_card"
                      v-model="id_card"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>หมายเลขโทรศัพท์</label>
                    <input
                      type="number"
                      class="form-control"
                      id="tel"
                      v-model="phone"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">ที่อยู่</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    v-model="address"
                    required
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputState">เพศ</label>
                    <select
                      id="inputState"
                      class="form-control"
                      v-model="sex"
                      required
                    >
                      <option selected disabled>เพศ</option>
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputCity">น้ำหนัก</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      v-model="weight"
                      required
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">ส่วนสูง</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputZip"
                      v-model="height"
                      required
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">อายุ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputZip"
                      v-model="age"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputCity">ศาสนา</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      v-model="religion"
                      required
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">กรุ๊ปเลือด</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputZip"
                      v-model="blood_type"
                      required
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">วันเกิด/เดือน/ปี/เกิด</label>
                    <div class="col-10">
                      <input
                        class="form-control"
                        type="date"
                        v-model="date_of_birth"
                        required
                      />
                    </div>
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
      role: "physician",
    };
  },
  mounted() {
    this.profilePhysician();
  },
  methods: {
    async profilePhysician() {
      const resp = await physicianService.getprofileOfficer();
      this.uuid = resp.data.uuid;
      this.first_name = resp.data.first_name;
      this.last_name = resp.data.last_name;
      this.id_card = resp.data.id_card;
      this.address = resp.data.address;
      this.email = resp.data.email;
      this.sex = resp.data.sex;
      this.weight = resp.data.weight;
      this.height = resp.data.height;
      this.phone = resp.data.phone;
      this.age = resp.data.age;
      this.religion = resp.data.religion;
      this.blood_type = resp.data.blood_type;
      this.date_of_birth = resp.data.date_of_birth;
      console.log(resp);
    },
     async updatePhysician() {
      try {
        const updateForm = {
          uuid: this.uuid,
          first_name: this.first_name,
          last_name: this.last_name,
          id_card: this.id_card,
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
        };
        await physicianService.updatePhysician(updateForm);

        alert("สำเร็จ");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
     
};
</script>
