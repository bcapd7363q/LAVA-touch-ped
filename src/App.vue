<script lang="ts" ref="component">
import { processor } from "./cloud/exportStorage";

// async function process() {
//   let pro = await processor().then(res => { return res }).catch(error => { return error }).finally(() => { return "connected.." });

//   return { data: pro.system.name }
// }

// console.log(process());

//import MONTH from './components/months.vue'
export default {
  el: "#App",
  props: {
    info: String,
  },
  components: {
    // MONTH
  },
  methods: {
    processor: async () => {
      return await processor()
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return error;
        })
        .finally(() => {
          return "connected..";
        });
    },
  },
  data() {
    return {
      year: this.$props,
    };
  },
  async mounted() {
    let pro = await this.processor();
    console.log(pro.system.name, this.info);
  },
};
</script>
<template id="App">
  <div class="flex space-x-2 justify-center">
    <span
      v-text="year"
      class="ml-1 border-2 border-indigo-600 bg-green-300 px-4 text-lg text-gray-600 font-normal"
    />
  </div>
</template>
