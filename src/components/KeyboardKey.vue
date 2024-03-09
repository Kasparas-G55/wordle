<template>
  <button
    class="p-0 bg-gray-900 border-none cursor-pointer rounded-xl outline-offset-4"
    type="button"
  >
    <span
      class="block -translate-y-1.5 rounded-xl bg-gray-700 px-8 py-3 text-xl font-semibold text-white transition-transform active:-translate-y-0.5"
    >
      {{ letter.toUpperCase() }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  letter: {
    type: String,
    required: true,
  },
});
</script>
