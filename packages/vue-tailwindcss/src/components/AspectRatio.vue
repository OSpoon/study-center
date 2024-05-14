<script lang="ts" setup>
import { useStates } from "../uses/states";

const states = useStates([
  "aspect-auto",
  "aspect-square",
  "aspect-video",
  "aspect-[4/3]",
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
  <iframe
    class="w-full"
    :class="states.state.value"
    src="https://www.youtube.com/embed/dQw4w9WgXcQs"
    frameborder="0"
  ></iframe>
</template>
