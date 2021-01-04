<template>
  <div id="User">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fa fa-book" aria-hidden="true"></i> จัดการข้อมูลผู้ป่วย
        </h4>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <form v-on:submit.prevent="searchMember">
                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="row">
                          <div class="col-6">
                            <input
                              type="text"
                              placeholder="ชื่อ"
                              class="form-control"
                              v-model="first_name"
                            />
                          </div>
                          <div class="col-6">
                            <input
                              type="text"
                              placeholder="นามสกุล"
                              class="form-control"
                              v-model="last_name"
                            />
                          </div>
                        </div>

                        <button type="submit" class="btn btn-search">
                          <i class="fa fa-search search-icon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="col">
                  <router-link to="/addMember">
                    <button type="button" class="btn btn-secondary float-right">
                      <i
                        class="fa fa-plus-circle fa-lg mr-2"
                        aria-hidden="true"
                      ></i>
                      เพิ่มข้อมูลผู้ป่าย
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
                      <th>เลขบัตรประจำตัว</th>
                      <th>กรุ้ปเลือด</th>
                      <th>วันเกิด</th>
                    </tr>
                  </thead>
                  <tbody style="text-align: center">
                    <tr v-for="data in member" v-bind:key="data.id">
                      <td>{{ data.first_name }}</td>
                      <td>{{ data.last_name }}</td>
                      <td>{{ data.id_card }}</td>
                      <td>{{ data.blood_type }}</td>
                      <td>{{ data.date_of_birth }}</td>
                      <td>
                        <button
                          @click.prevent="editMember(data.uuid)"
                          type="button"
                          class="btn btn-info btn-sm mr-1 text-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click.prevent="deleteUser(data.uuid)"
                          class="btn btn-danger btn-sm mr-1 text-white"
                        >
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
            <form v-on:submit.prevent="updateMember">
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
                <div class="form-group col-md-6" hidden>
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
                <div class="form-group col-md-3">
                  <label for="inputCity">ศาสนา</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    v-model="religion"
                    required
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputZip">กรุ๊ปเลือด</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    v-model="blood_type"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
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
      form: {
        uuid: "",
      },
      member: [],
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
    this.getallmember();
  },
  methods: {
    async getallmember() {
      const resp = await userService.getallmember();
      this.member = resp.data;
      console.log(resp);
    },
    async editMember(uuid) {
      console.log(uuid);
      const resp = await userService.editMember(uuid);
      this.form.uuid = resp.data.uuid;
      this.first_name = resp.data.first_name;
      this.last_name = resp.data.last_name;
      this.id_card = resp.data.id_card;
      this.password = resp.data.password;
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
    },
    async updateMember() {
      try {
        const updateForm = {
          uuid: this.form.uuid,
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
          role: "physician",
        };
        await userService.updateUser(updateForm);
        alert("สำเร็จ");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
    async deleteUser(uuid) {
      await userService.deleteUser(uuid);
      alert("ลบข้อมูลสำเร็จ");
    },
    async searchMember() {
      try {
        const searchForm = {
          first_name: this.first_name,
          last_name: this.last_name,
        };
        const resp = await userService.searchMember(
         searchForm
        );
          this.member = resp.data;
        console.log(resp);
        alert("สำเร็จ");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>
