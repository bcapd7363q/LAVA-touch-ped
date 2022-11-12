<script lang="ts" ref="component">
import STORE from "./cloud/storage";
import MONTH from './components/months.vue'
import CONTESTABLE from './components/months/contestable.vue'
export default {
  el: "#App",
  components:{
    MONTH
  },
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
    <MONTH ref="components" />
  </div>
</template>
