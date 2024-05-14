<script lang="ts" setup>
import { useStates } from "../uses/states";

const states = useStates([
  "columns-3",
  "columns-4",
  "columns-4 gap-8",
  "columns-5",
  "columns-3xs",
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
  <div class="bg-gray-100" :class="states.state.value">
    <img
      class="w-200 aspect-square"
      src="https://picsum.photos/200/200?random=1"
      alt=""
    />
    <img
      class="w-200 aspect-square"
      src="https://picsum.photos/200/200?random=2"
      alt=""
    />
    <img
      class="w-200 aspect-square"
      src="https://picsum.photos/200/200?random=3"
      alt=""
    />
    <img
      class="w-200 aspect-square"
      src="https://picsum.photos/200/200?random=4"
      alt=""
    />
    <img
      class="w-200 aspect-square"
      src="https://picsum.photos/200/200?random=5"
      alt=""
    />
  </div>
</template>
