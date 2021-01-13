<template>
  <div id="receipt">
    <div class="page-inner">
      <div class="page-header">
        <h4 id="test" class="page-title">
          <i class="fas fa-user-plus"></i> ออกใบเสร็จ
        </h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div ref="content">
        <div class="card-body">
          <div class="card-header text-center">
            <h1>ใบเสร็จการรักษา</h1>
          </div>
          <div class="table-responsive">
            <table
              id="basic-datatables"
              class="display table table-striped table-hover table-bordered"
            >
              <thead style="text-align: center">
                <tr>
                  <th>ข้อมูลทั่วไป</th>
                  <th>ราคา</th>
                </tr>
              </thead>
              <tbody style="text-align: center">
                <!-- <tr v-for="data in news" v-bind:key="data.id"> -->
                <tr>
                  <td>{{ detail }}</td>
                  <td>{{ price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button @click="downloadWithCSS">Download PDF</button>
      <!-- <div class="row">
       <button class="btn btn-danger" @click="generatePdf">generate PDF</button>
      </div> -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="createReceipt">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>รหัสผู้ป่วย</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="uuid_user"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ข้อมูลทั่วไป</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="detail"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ราคา</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="price"
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
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import physicianService from "./../../../../services/physician";
export default {
  name: "receipt",
  data() {
    return {
      uuid_user: "",
      detail: "",
      price: "",
      data: [],
    };
  },
  methods: {
    downloadWithCSS() {
      /** WITH CSS */
      
    },
    async createReceipt() {
      console.log("asd");
      try {
        const addreceipt = {
          uuid_user: this.uuid_user,
          detail: this.detail,
          price: this.price,
        };

        const resp = await physicianService.addreceipt(addreceipt);
        this.data = resp;
        console.log(this.data);
        alert("เพิ่มสำเร็จ");
        domtoimage
        .toPng(this.$refs.content)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          const doc = new jsPDF({
            orientation: "landscape",
          });
          doc.addImage(img, "JPEG", 50, 0);
          const date = new Date();
          const filename =
            "timechart_" +
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2) +
            ".pdf";
          doc.save(filename);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>

