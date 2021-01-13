<template>
  <div id="physAddnews">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title"><i class="fas fa-user-plus"></i> จัดการคิว</h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>My Calendar</h1>
              <calendar-view
                :items="queue"
                :show-date="showDate"
                :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
                :enable-drag-drop="true"
                :disable-past="disablePast"
                :disable-future="disableFuture"
                :show-times="showTimes"
                :date-classes="myDateClasses"
                :display-period-uom="displayPeriodUom"
                :display-period-count="displayPeriodCount"
                :starting-day-of-week="startingDayOfWeek"
                :class="themeClasses"
                :period-changed-callback="periodChanged"
                :current-period-label="useTodayIcons ? 'icons' : ''"
                :displayWeekNumbers="displayWeekNumbers"
                :enable-date-selection="true"
                :selection-start="selectionStart"
                :selection-end="selectionEnd"
                @date-selection-start="setSelection"
                @date-selection="setSelection"
                @date-selection-finish="finishSelection"
                @drop-on-date="onDrop"
                @click-date="onClickDay"
                @click-item="onClickItem"
              >
                <calendar-view-header
                  slot="header"
                  slot-scope="{ headerProps }"
                  :header-props="headerProps"
                  @input="setShowDate"
                />
              </calendar-view>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>เพิ่มคิว</h3>
            </div>
            <div class="card-body">
              <form v-on:submit.prevent="addQueue">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>รหัสผู้ป่วย</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="uuid_users"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>อาการ</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="symptoms"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>ข้อมูลอาการ</label>
                    <textarea
                      class="form-control"
                      v-model="symptom_details"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputZip">วันนัด</label>
                    <input
                      v-model="appointment_dates"
                      type="datetime-local"
                      name=""
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
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>ข้อมูลคิว</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="basic-datatables"
                  class="display table table-striped table-hover table-bordered"
                >
                  <thead style="text-align: center">
                    <tr>
                      <th>อาการ</th>
                      <th>รายละเอียด</th>
                      <th>ตัวเลือก</th>
                    </tr>
                  </thead>
                  <tbody style="text-align: center">
                    <tr v-for="data in allqueue" v-bind:key="data.id">
                      <td>{{ data.symptom }}</td>
                      <td>{{ data.symptom_detail }}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-info btn-sm mr-1 text-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          @click.prevent="editeQueue(data.uuid)"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-danger btn-sm mr-1 text-white"
                          @click.prevent="deleteNews(data.uuid)"
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
            <form v-on:submit.prevent="updateQueue">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>อาการ</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="symptom"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>ข้อมูลอาการ</label>
                  <textarea
                    class="form-control"
                    v-model="symptom_detail"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputZip">วันนัด</label>
                  <input
                    v-model="appointment_date"
                    type="datetime-local"
                    name=""
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
</template>

<script>
import physicianService from "./../../../../services/physician";
// Load CSS from the published version
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");
// Load CSS from the local repo
//require("../../vue-simple-calendar/static/css/default.css")
//require("../../vue-simple-calendar/static/css/holidays-us.css")
import {
  CalendarView,
  CalendarViewHeader,
  CalendarMathMixin,
} from "vue-simple-calendar"; // published version
//} from "../../vue-simple-calendar/src/components/bundle.js" // local repo
export default {
  name: "App",
  components: {
    CalendarView,
    CalendarViewHeader,
  },
  mixins: [CalendarMathMixin],
  data() {
    return {
      /* Show the current month, and give it some fake items to show */
      showDate: this.thisMonth(1),
      message: "",
      startingDayOfWeek: 0,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: "month",
      displayPeriodCount: 1,
      displayWeekNumbers: false,
      showTimes: true,
      selectionStart: null,
      selectionEnd: null,
      newItemTitle: "",
      newItemStartDate: "",
      newItemEndDate: "",
      useDefaultTheme: true,
      useHolidayTheme: true,
      useTodayIcons: false,
      appointment_date: "",
      symptom: "",
      status: "1",
      symptom_detail: "",
      uuid_physician: "",
      uuid_user: "",
      appointment_dates: "",
      symptoms: "",
      symptom_details: "",
      uuid_users: "",
      queue: [],
      allqueue: [],
      uuid:''
    };
  },
  computed: {
    userLocale() {
      return this.getDefaultBrowserLocale;
    },
    dayNames() {
      return this.getFormattedWeekdayNames(this.userLocale, "long", 0);
    },
    themeClasses() {
      return {
        "theme-default": this.useDefaultTheme,
        "holiday-us-traditional": this.useHolidayTheme,
        "holiday-us-official": this.useHolidayTheme,
      };
    },
    myDateClasses() {
      const o = {};
      const theFirst = this.thisMonth(1);
      const ides = [2, 4, 6, 9].includes(theFirst.getMonth()) ? 15 : 13;
      const idesDate = this.thisMonth(ides);
      o[this.isoYearMonthDay(idesDate)] = "ides";
      o[this.isoYearMonthDay(this.thisMonth(21))] = [
        "do-you-remember",
        "the-21st",
      ];
      return o;
    },
  },
  mounted() {
    this.newItemStartDate = this.isoYearMonthDay(this.today());
    this.newItemEndDate = this.isoYearMonthDay(this.today());
    this.getQueue();

    console.log(this.thisMonth(15));

    console.log(this.item);
  },
  methods: {
    async updateQueue() {
      const uuid_physician = sessionStorage.getItem("uuid");
      const uuid = this.uuid;
      const queueForm = {
        appointment_date: this.appointment_date,
        symptom: this.symptom,
        status: "1",
        uuid_user: this.uuid_user,
        symptom_detail: this.symptom_detail,
        uuid_physician: uuid_physician,
      };
      const resp = await physicianService.updateQueue(uuid, queueForm);
      alert("เเก้ไขข้อมูลสำเร็จ");
      console.log(resp);
    },
    async editeQueue(uuid) {
      const resp = await physicianService.editeQueue(uuid);
      this.uuid = resp.data.uuid;
      this.appointment_date = resp.data.appointment_date;
      this.symptom = resp.data.symptom;
      this.uuid_user = resp.data.uuid_user;
      this.symptom_detail = resp.data.symptom_detail;
      console.log(resp);
    },
    async getQueue() {
      const resp = await physicianService.getQueue();
      this.allqueue = resp.data;
      // this.queue = resp.data[0].appointment_date;
      console.log(resp.data.eLength);

      for (let index = 0; index < resp.data.length; index++) {
        this.queue.push({
          startDate: resp.data[index].appointment_date,
          title: resp.data[index].symptom,
        });
      }
      console.log();
      console.log(this.queue + "asdasd");
      console.log(resp.data);
    },
    async addQueue() {
      try {
        const uuid = sessionStorage.getItem("uuid");
        const queueForm = {
          appointment_date: this.appointment_dates,
          symptom: this.symptoms,
          status: "1",
          uuid_user: this.uuid_users,
          symptom_detail: this.symptom_details,
          uuid_physician: uuid,
        };
        const resp = await physicianService.addQueue(queueForm);
        console.log(resp);
        alert("เพิ่มสำเร็จ");
        this.$router.push("#");
      } catch (error) {
        alert("ไม่สำเร็จ");
      }
    },

    periodChanged() {
      // range, eventSource) {
      // Demo does nothing with this information, just including the method to demonstrate how
      // you can listen for changes to the displayed range and react to them (by loading items, etc.)
      //console.log(eventSource)
      //console.log(range)
    },
    thisMonth(d, h, m) {
      const t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    },
    onClickDay(d) {
      alert(d.toLocaleDateString());
      this.selectionStart = null;
      this.selectionEnd = null;
      this.message = `You clicked: ${d.toLocaleDateString()}`;
    },
    onClickItem(e) {
      this.message = `You clicked: ${e.symptom}`;
    },
    setShowDate(d) {
      this.message = `Changing calendar view to ${d.toLocaleDateString()}`;
      this.showDate = d;
    },
    setSelection(dateRange) {
      this.selectionEnd = dateRange[1];
      this.selectionStart = dateRange[0];
    },
    finishSelection(dateRange) {
      this.setSelection(dateRange);
      this.message = `You selected: ${this.selectionStart.toLocaleDateString()} -${this.selectionEnd.toLocaleDateString()}`;
    },
    onDrop(item, date) {
      this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`;
      // Determine the delta between the old start date and the date chosen,
      // and apply that delta to both the start and end date to move the item.
      const eLength = this.dayDiff(item.startDate, date);
      item.originalItem.startDate = this.addDays(item.startDate, eLength);
      item.originalItem.endDate = this.addDays(item.endDate, eLength);
    },
    clickTestAddItem() {
      this.items.push({
        appointment_date: this.newItemStartDate,
        endDate: this.newItemEndDate,
        sy: this.newItemTitle,
        id:
          "e" +
          Math.random()
            .toString(36)
            .substr(2, 10),
      });
      this.message = "You added a calendar item!";
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  font-family: Calibri, sans-serif;
  width: 95vw;
  min-width: 30rem;
  max-width: 100rem;
  min-height: 40rem;
  margin-left: auto;
  margin-right: auto;
}
.calendar-controls {
  margin-right: 1rem;
  min-width: 14rem;
  max-width: 14rem;
}
.calendar-parent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  max-height: 80vh;
  background-color: white;
}
/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
  min-height: 6rem;
}
/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */
/* Add some styling for items tagged with the "birthday" class */
.theme-default .cv-item.birthday {
  background-color: #e0f0e0;
  border-color: #d7e7d7;
}
.theme-default .cv-item.birthday::before {
  content: "\1F382"; /* Birthday cake */
  margin-right: 0.5em;
}
/* The following classes style the classes computed in myDateClasses and passed to the component's dateClasses prop. */
.theme-default .cv-day.ides {
  background-color: #ffe0e0;
}
.ides .cv-day-number::before {
  content: "\271D";
}
.theme-default .cv-day.do-you-remember.the-21st .cv-day-number::after {
  content: "\1F30D\1F32C\1F525";
}
.theme-default .cv-header,
.theme-default .cv-header-day {
  background-color: #48abf7;
}
.cv-header-nav,
.cv-header .periodLabel {
  margin: 0.1em 0.6em;
}
.cv-header,
.cv-header button {
  border-style: solid;
  border-color: #48abf7;
  block-size: 50px;
}
.cv-wrapper,
.cv-wrapper div {
  box-sizing: border-box;
  line-height: 50px;
  font-size: 20px;
}

.theme-default .cv-header .periodLabel {
  font-size: 1.5em;
  font-weight: 900;
}
</style>
