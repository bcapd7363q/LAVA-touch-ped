<script lang="ts">
import STORE from "../cloud/storage";
import HEADER from "../components/months/header.vue"
import TOOLS from "../components/months/tools.vue"
import NTR from "../components/months/ntr.vue"
import CONTESTABLE from '../components/months/contestable.vue'
let response = await STORE.air().then(res => res.data).catch(error => {
  console.log(error);
});

export default {
  name: "Calendar",
  date: response,
  components: {
    HEADER,
    TOOLS,
    NTR,
    CONTESTABLE 
  },
  data() {
    return {
      date: response.date + ' ' + response.day,
      month_names: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      month: "",
      year: "",
      no_of_days: [],
      emptyDays: [],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],


      events: [
        {
          event_date: new Date(2021, 9, 4),
          event_title: "My Birthday :)",
          event_theme: "red"
        },

        {
          event_date: new Date(2021, 11, 25),
          event_title: "Xmas Day",
          event_theme: "green"
        },
        {
          event_date: new Date(2021, 9, 31),
          event_title: "Halloween",
          event_theme: "yellow"
        },
        {
          event_date: new Date(2021, 11, 31),
          event_title: "New Years Eve",
          event_theme: "yellow"
        }
      ],

      themes: [
        {
          value: "blue",
          label: "Blue Theme"
        },
        {
          value: "red",
          label: "Red Theme"
        },
        {
          value: "yellow",
          label: "Yellow Theme"
        },
        {
          value: "green",
          label: "Green Theme"
        },
        {
          value: "purple",
          label: "Purple Theme"
        }
      ],

      openModal: false
    };
  },
  methods: {
    initDate() {
      let today = new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
    },

    isToday(date) {
      const today = new Date();
      const d = new Date(this.year, this.month, date);

      return today.toDateString() === d.toDateString();
    },

    // Show what's planned for that day
    showDayModal(day) {
      console.log(this.month, day);
    },

    getNoOfDays() {
      let i;
      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

      // find where to start calendar day of week
      let dayOfWeek = new Date(this.year, this.month).getDay();
      let emptyDaysArray = [];

      let daysArray = [];

      this.emptyDays = emptyDaysArray;
      this.no_of_days = daysArray;
    }
  },
  mounted() {
    this.initDate();
    this.getNoOfDays();
    console.log(this.events);
  }
}
</script>

<template>
  <div class="container mx-auto py-2 px-3">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="flex-col items-center justify-between py-1 px-5">
        <HEADER />
        <div>
        </div>
      </div>

      <div class="mx-1 mb-1">
          <TOOLS />
        

        <div class="flex flex-wrap border-t border-l">
          <NTR/>
          <CONTESTABLE ref="component" />
        </div>
      </div>
    </div>
  </div>
</template>