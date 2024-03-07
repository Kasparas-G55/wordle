<template>
  <button
    class="bg-gray-900 rounded-xl border-none p-0 cursor-pointer outline-offset-4"
    type="button"
  >
    <span
      class="block py-3 px-8 font-semibold
    bg-gray-700 rounded-xl text-xl text-white transition-transform i -translate-y-1.5 active:-translate-y-0.5"
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
