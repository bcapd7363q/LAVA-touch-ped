<script lang="ts" ref="component">
import { ref } from "vue";
import STORE from "./cloud/storage";
import MONTH from './components/months.vue'
export default {
  el: "#App",
  methods: {
    addOne: async () => {
      await STORE.air()
        .then((response) => {
          console.log("then " + response.data.date);
        })
        .catch((error) => {
          console.log("catch error! :" + error);
        })
        .finally(() => {
          console.log("finally async completed ");
        });
    },
  },
};
</script>
<template id="App">
  <div class="flex space-x-2 justify-center">
    <button
      @click="addOne"
      type="button"
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      Button
    </button>
    <MONTH/>
  </div>
</template>
