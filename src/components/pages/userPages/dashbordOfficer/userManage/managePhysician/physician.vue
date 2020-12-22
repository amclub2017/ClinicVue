<template>
  <div id="User">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fa fa-book" aria-hidden="true"></i> จัดการข้อมูลเเพทย์
        </h4>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <router-link to="addPhysician">
                    <button type="button" class="btn btn-secondary float-right">
                      <i
                        class="fa fa-plus-circle fa-lg mr-2"
                        aria-hidden="true"
                      ></i>
                      เพิ่มเเพทย์
                    </button>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="basic-datatables"
                  class="display table table-striped table-hover table-bordered"
                >
                  <thead style="text-align: center">
                    <tr>
                      <th>ชื่อ</th>
                      <th>นามสกุล</th>
                      <th>เลขประจำตัว</th>
                      <th>ที่อยู่</th>
                      <th>กรุ้ปเลือด</th>
                      <th>วันเกิด</th>
                    </tr>
                  </thead>
                  <tbody style="text-align: center">
                    <tr v-for="data in physician" v-bind:key="data.id">
                      <td>{{ data.first_name }}</td>
                      <td>{{ data.last_name }}</td>
                      <td>{{ data.id_card }}</td>
                      <td>{{ data.blood_type }}</td>
                      <td>{{ data.date_of_birth }}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-info btn-sm mr-1 text-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm mr-1 text-white">
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              แก้ไขข้อมูลเเพทย์
            </h5>
          </div>
          <div class="modal-body">
              <form >
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">ชื่อ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
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
                    <label for="inputPassword4">รหัสผ่าน</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      v-model="password"
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
</template>
<script>
import userService from "./../../../../../services/user";
export default {
  data() {
    return {
      physician: [],
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
    this.officerGetProfilePhysician();
  },
  methods: {
    async officerGetProfilePhysician() {
      const resp = await userService.officerGetProfilePhysician();
      this.physician = resp.data;
      console.log(resp);
    },
  },
};
</script>
