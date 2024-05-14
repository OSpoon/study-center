import { computed, ref } from "vue";

export const useStates = (states: string[]) => {
  const index = ref(0);
  const state = computed(() => states[index.value]);
  return {
    state,
    toggleState: () => {
      index.value = (index.value + 1) % states.length;
    },
  };
};
