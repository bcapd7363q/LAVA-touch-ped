<script lang="ts" ref="component">
import { processor } from "./cloud/exportStorage";
import MONTH from './components/months.vue'

export default {
  el: "#App",
  props: {
    info: String,
  },
  components: {
//     MONTH
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
      year: this.$props.info,
      processing:"processing..."
    };
  },
  async mounted() {
    let pro = await this.processor();
    let tests11 = pro.system.name;
    console.log(tests11);
    
    //this.$refs.processing = tests11
  },
};
</script>

<template id="App">
  <div class="flex space-x-2 justify-center">
    <span
      v-text="processing"
      class="ml-1 border-2 border-indigo-600 bg-green-300 px-4 text-lg text-gray-600 font-normal"
    />
  </div>
</template>
