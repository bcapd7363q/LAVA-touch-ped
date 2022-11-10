<script setup>
import {ref} from 'vue'
let toDay = ref(new Date().getDate());

let positive = (event, toDay) => {

  const financialStatus = (toDay >= 30) ? "Regular" : "Leap";
  return financialStatus ;
}

let negative = () => {
  return 100;
}

data:() => {
  return {
    positive : "positive",
    navigator: "navigator"
  };
}
serverPrefetch: async () =>{

}
mounted: async (data)=>{
  await console.log("console log:mounted");
  return "mounted"
}
created:async()=>{
  await console.log("console log:created");
  return "created"
}
methods:async()=>{
  await console.log("console log:methods");
  return "methods"
}

</script>

<template>
    <div class="custom-number-input h-10 w-32">
      <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Date :
  </label>

  <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button @click="negative" data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input v-model="toDay" placeholder="enter number"  class="text-center w-40 bg-warm-gray-400-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" type="text">
    <button @click="positive" data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>

  </div>
</div>
</template>