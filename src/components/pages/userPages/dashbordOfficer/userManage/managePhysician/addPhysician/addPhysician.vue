<template>
  <div id="app">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title"><i class="fas fa-user-plus"></i> เพิ่มเเพทย์</h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">ชื่อ</label>
                    <input type="text" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">นามสกุล</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">รหัสผ่าน</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">ที่อยู่</label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputState">เพศ</label>
                    <select id="inputState" class="form-control">
                      <option selected disabled>เพศ</option>
                      <option>ชาย</option>
                      <option>หญิง</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputCity">น้ำหนัก</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">ส่วนสูง</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">อายุ</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputCity">ศาสนา</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">กรุ๊ปเลือด</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">วันเกิด</label>
                    <div class="col-10">
                      <input
                        class="form-control"
                        type="date"
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
