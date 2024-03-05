<template>
  <button
    class="bg-gray-300 font-bold px-3 py-5 capitalize select-none"
    type="button"
  >
    {{ letter }}
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
