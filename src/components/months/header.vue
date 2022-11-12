<script lang="ts">
import { def } from "@vue/shared";
import STORE from "../../cloud/storage";

let response = await STORE.air().then(res => res.data).catch(error => {
    console.log(error);
});

export default {
    name:'monthHeader',
    data() {
        return {
            date: response.date + ' ' + response.day,
            month:response.month,
            year: response.year,
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

            

        }
    },
}

</script>
<template id="monthHeader" >
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
                    <span v-text="year"
                        class="ml-1 border-2 border-indigo-600 bg-green-300 px-4 text-lg text-gray-600 font-normal" />
            
                </div>
            </div>
        </div> </div></div>
</template>