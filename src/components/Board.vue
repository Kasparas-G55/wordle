
<template>
  <div class="flex flex-col gap-2">
    {{ guesses }}
    <BoardRow
      v-for="(row, i) of 6"
      :key="row"
      :data-test="guesses[i]"
      :guess="guesses[i]"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import BoardRow from "./BoardRow.vue";

defineProps({
  guesses: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>
