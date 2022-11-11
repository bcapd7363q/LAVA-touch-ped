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
      
      <div class="mx-1 mb-1">
        <div class="flex flex-wrap mb-8" style="margin-bottom: 30px;">
          
        </div>

        <div class="flex flex-wrap border-t border-l">
          <div class="flex justify-center">
            <div class="bg-white">
                <div class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Sun</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Mon</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Tue</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Wed</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Thu</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Fri</div>
                </div>
                <div class="font-medium px-6 py-4">
                  <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1">Sat</div>
                </div>
              <!-- <p class="text-gray-700 text-base mb-4">
              <template v-for="day in days">
                <div class="font-medium px-6 py-4 ">
                  <div v-text="day" class="text-gray-600 text-sm uppercase tracking-wide font-bold text-left mb-1"></div>
                </div>
              </template>
              </p>
               -->
            </div>
          </div>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                      <tbody>
                        <tr class="border-b bg-blue-100 border-blue-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Primary
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-purple-100 border-purple-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Secondary
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-green-100 border-green-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Success
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-red-100 border-red-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Danger
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-yellow-100 border-yellow-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Warning
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-indigo-100 border-indigo-200">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            Info
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                        </tr>
                        <tr class="border-b bg-gray-800 boder-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                            Dark
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            Cell
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
      </div>
    </div>
  </div>
</template>