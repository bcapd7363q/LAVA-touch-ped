<script lang="ts">
import { ref } from 'vue'
import STORE from "../cloud/storage";

let response =  await STORE.air().then(res=>res.data).catch(error=>{console.log(error);
});

export default {
  name: "Calendar",
  date: response,
  components: {
  },
  data() {
    return {
      date: response.date +' '+response.day,
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
        <div class="flex">
          <div class="flex-1 w-40 h-3">
                      <span v-text="date" class="rounded-full bg-red-400  px-3  ml-1 text-lg text-white-600 font-normal" />
          </div>
          <div class="flex-initial w-32">
                      <span v-text="month_names[month]" class="text-lg font-bold text-gray-800" />

          </div>
          <div class="flex-col-reverse h-3">
                      <span v-text="year" class="ml-1 border-2 border-indigo-600 bg-green-300 px-4 text-lg text-gray-600 font-normal" />

          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="-mx-1 -mb-1">
        <div class="flex flex-wrap -mb-8" style="margin-bottom: -30px;">
          <template v-for="day in days">
            <div class="px-2 py-2 w-[14.28%]">
              <div v-text="day" class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1"></div>
            </div>
          </template>
        </div>

        <div class="flex flex-wrap border-t border-l">
          <template v-for="emptyDay in emptyDays">
            <div class="text-left border-r border-b px-4 pt-2 h-32 w-[14.28%]"></div>
          </template>
          <template v-for="(date, dateIndex) in no_of_days">
            <div class="px-4 pt-2 border-r border-b relative h-32 w-[14.28%]">
              <div @click="showDayModal(date)" v-text="date"
                class="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
                :class="{ 'bg-blue-500 text-white': isToday(date) === true, 'text-gray-700 hover:bg-blue-200': isToday(date) === false }">
              </div>
              <div class="overflow-y-auto mt-1 h-20">
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>