<template>
  <div id="receipt">
    <div class="page-inner">
      <div class="page-header">
        <h4 id="test" class="page-title"><i class="fas fa-user-plus"></i> ออกใบเสร็จ</h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
       <button class="btn btn-danger" @click="generatePdf">generate PDF</button>
      </div>
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
                    <textarea
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
import 'jspdf-autotable'
import physicianService from "./../../../../services/physician";
export default {
  name: 'receipt',
  data() {
    return {
      uuid_user: "",
      detail: "",
      price: "",
      data:[]
    };
  },
  methods: {
      generatePdf() {
        console.log("ok");

  // const pdf = new jsPDF('p','mm','a4');

  //     pdf.text(20,25,'Hello World');
  //       pdf.text(160,25,'Hello World');
  //       pdf.line(20, 20, 60, 20);
  //     pdf.lines([[2,2],[-2,2],[1,1,2,2,3,3],[2,1]], 212,110, [1,1], 'F', false)
  //     let header = ["id","name","test"];
  //     let headerConfig = header.map(key=>({ 'name': key,'test': key,'id': key,
  //     'prompt': key,
  //     'width':75,
  //     'align':'center',
  //     'padding':0}));
  //     let data = [{id: 1, name: "Peter", test: "Chris"},{id: '2', name: "Chris", test: '1'}];
  //     pdf.table(20, 30, data, headerConfig);
  //   var string = pdf.output('datauristring');
  // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
  // var win = window.open();
  // win.document.open();
  // win.document.write(iframe);
  // win.document.close();
    //   pdf.save("pdf.pdf");

const doc = new jsPDF('p', 'pt', 'letter')
var data = ['5000','detaifdsfdsfl']
 
// It can parse html:
// <table id="my-table"><!-- ... --></table>
doc.autoTable({ html: '#my-table' })
 
// Or use javascript directly:
doc.autoTable({
  head: [['รายละเอียด', 'จำนวนเงิน']],
  body: [
    data,
    ['ดเดกเกดหกดหกดหกด', '500'],
    // ...
  ],
})
 
var string = doc.output('datauristring');
  var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
  var win = window.open();
  win.document.open();
  win.document.write(iframe);
  win.document.close();

//  pdf.addHTML($('#receipt')[0], function () {
//      pdf.save('Test.pdf');
//  });


    
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
  
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },
  },
};
</script>

