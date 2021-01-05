<template>
  <div id="physAddnews">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">
          <i class="fas fa-user-plus"></i> จัดการคิว
        </h4>
        <ul class="breadcrumbs"></ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <vue-calendar
                @show-all="showAll"
                @event-clicked="eventClicked"
                @month-changed="monthChanged"
              ></vue-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    showAll(events) {
    console.log(events);
      sessionStorage.getItem("day");
    },
    dayClicked(day) {
      console.log(day);
      alert('จองมั้ย')
      sessionStorage.setItem("day",day.date);
    },
    eventClicked(event) {
      console.log(event);
    },
    monthChanged(start, end) {
      console.log(start, end);
    },
  },
  created() {
    this.$calendar.eventBus.$on("show-all", (events) => this.showAll(events));
    this.$calendar.eventBus.$on("day-clicked", (day) => this.dayClicked(day));
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
y
