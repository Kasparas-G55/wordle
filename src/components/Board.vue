
<template>
  <div class="flex flex-col gap-2">
    <BoardRow
      v-for="row, of 6"
      :key="row"
      :guess
    />
  </div>
</template>

<script setup lang="ts">
import BoardRow from "./BoardRow.vue";

defineProps({
  guess: {
    type: String,
    required: true,
  }
});
</script>
