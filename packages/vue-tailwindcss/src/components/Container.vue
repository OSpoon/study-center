<script lang="ts" setup>
import { useStates } from "../uses/states";

const states = useStates(["container mx-auto px-4", "container"]);
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
    <h1 class="text-3xl font-bold underline">Hello World!</h1>
  </div>
</template>
