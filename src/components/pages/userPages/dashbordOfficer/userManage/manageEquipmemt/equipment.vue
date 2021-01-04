<template>
  <div id="User">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fa fa-book" aria-hidden="true"></i> จัดการอุปกรณ์
        </h4>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <router-link to="addEquipment">
                    <button type="button" class="btn btn-secondary float-right">
                      <i
                        class="fa fa-plus-circle fa-lg mr-2"
                        aria-hidden="true"
                      ></i>
                      เพิ่มอุปกรณ์
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
                      <th>ภาพ</th>
                      <th>รายละเอียด</th>
                      <th>จำนวน</th>
                    </tr>
                  </thead>
                  <tbody style="text-align: center">
                    <tr v-for="data in equipment" v-bind:key="data.id">
                      <td>{{ data.name }}</td>
                      <td><img v-bind:src="data.img" width="100" /></td>
                      <td>{{ data.detail }}</td>
                      <td>{{ data.qty }}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-info btn-sm mr-1 text-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          @click.prevent="editEquipment(data.uuid)"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-danger btn-sm mr-1 text-white"
                          @click.prevent="deleteEquipment(data.uuid)"
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
            <form v-on:submit.prevent="updateEquipment">
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
              </div>
              <img v-bind:src="img" width="100" />
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
      equipment: [],
      name: "",
      detail: "",
      status: "1",
      uuid_user: "",
      qty: "",
      img: "",
      uuid:'',
    };
  },
  mounted() {
    this.getEquipment();
    this.editEquipment();
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
    async getEquipment() {
      const resp = await userService.getEquipment();
      this.equipment = resp.data;
      console.log(resp);
    },
    async editEquipment(uuid) {
      const resp = await userService.editEquipment(uuid);
      this.uuid = resp.data[0].uuid;
      this.name = resp.data[0].name;
      this.detail = resp.data[0].detail;
      this.qty = resp.data[0].qty;
      this.img = resp.data[0].img;
    },
    async updateEquipment() {
       const uuid_equipment = this.uuid;
       console.log(uuid_equipment);
      const equipmentOfficerForm = {
        name: this.name,
        detail: this.detail,
        status: "1",
        qty: this.qty,
        img: this.img,
      };
      const resp = await userService.updateEquipment(uuid_equipment,equipmentOfficerForm);
       alert("เเก้ไขข้อมูลสำเร็จ");
      console.log(resp);
    },
    async deleteEquipment(uuid) {
      await userService.deleteEquipment(uuid);
      alert("ลบข้อมูลสำเร็จ");
    },
  },
};
</script>
