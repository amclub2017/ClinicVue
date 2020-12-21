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
                    <tr>
                      <td>ห</td>
                      <td>ห/td></td>
                      <td>ฟหกฟ</td>
                      <td>ฟหก</td>
                      <td>ฟหก</td>
                      <td>
                        <button
                          v-on:click.prevent="getBankbyuuid(data.uuid)"
                          type="button"
                          class="btn btn-info btn-sm mr-1 text-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i class="fas fa-edit"></i>
                          แก้ไข
                        </button>
                        <button
                          class="btn btn-danger btn-sm mr-1 text-white"
                        >
                          <i class="fas fa-trash-alt"></i>
                          ลบ
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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
