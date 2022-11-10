<script setup>
import {ref,} from 'vue'
let toDay = ref(new Date().getDate());

let positive = (event, toDay) => {
  const months = (toDay >= 30) ? "Regular" : "Leap";
  console.log(event, months);
}

let negative = () => {}

methods: (event, response)=> {
  console.log(event, response ='methods');
  expose  : defineExpose;
  toDay: toDay;
  positive: positive;
  let mounted = (event, response)=> {
    // ...
    return response
  }
  let publicMethod = (event, response)=> {
    // ...
    return response
  }
  let privateMethod = (event, response) => {
    // ...
    return response
  }
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