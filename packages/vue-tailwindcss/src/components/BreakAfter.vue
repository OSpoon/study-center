<script lang="ts" setup>
import { useStates } from "../uses/states";

const states = useStates([
  "break-after-auto",
  "break-after-avoid",
  "break-after-all",
  "break-after-avoid-page",
  "break-after-page",
  "break-after-left",
  "break-after-right",
  "break-after-cloumn",
]);
</script>
<template>
  <button
    type="button"
    class="bg-indigo-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
    @click="states.toggleState"
  >
    ToggleState: ({{ states.state }})
  </button>
  <div class="bg-gray-100 w-3/4">
    <p class="text-gray-800" :class="states.state.value">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure ullam,
      delectus quae aut debitis, unde eius repudiandae facilis optio ducimus ut
      accusamus mollitia quaerat consequuntur! Neque sequi accusantium eum.
    </p>
  </div>
</template>
