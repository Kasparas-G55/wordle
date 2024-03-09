<template>
  <div class="flex flex-col gap-2 pb-4">
    <BoardRow
      v-for="(row, rowIndex) of 6"
      :key="`row-${row}`"
      :data-test="guesses[rowIndex]"
    >
      <BoardCell
        v-for="(cell, cellIndex) of WORD_SIZE"
        :key="`cell-${cell}`"
        :class="getCellColor(rowIndex, cellIndex)"
      >
        {{ getCellLetter(rowIndex, cellIndex) }}
      </BoardCell>
    </BoardRow>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { GUESS_WORD, WORD_SIZE } from "@/settings";
import BoardCell from "./BoardCell.vue";
import BoardRow from "./BoardRow.vue";

const props = defineProps({
  guesses: {
    type: Array as PropType<string[]>,
    required: true,
  },
  attempts: {
    type: Number,
    required: true,
  },
});

const guess = computed(() => props.guesses[props.attempts]);

// TODO: Code Optimization
function getCellColor(rowIndex: number, cellIndex: number) {
  if (rowIndex >= props.attempts || !props.guesses[rowIndex])
    return;

  const letters = [...props.guesses[rowIndex]];

  if (GUESS_WORD[cellIndex] === letters[cellIndex])
    return "bg-green-600";

  if (GUESS_WORD.includes(letters[cellIndex]))
    return "bg-yellow-500";
}

function getCellLetter(rowIndex: number, cellIndex: number) {
  if (props.attempts !== rowIndex)
    return props.guesses[rowIndex]?.[cellIndex] ?? "";

  return guess.value[cellIndex];
}
</script>
