<template>
  <div class="flex flex-row gap-2">
    <BoardLetter
      v-for="(num, i) of WORD_SIZE"
      :key="`letter-${num}`"
    >
      {{ guess ? guess[i] : '' }}
    </BoardLetter>
  </div>
</template>

<script setup lang="ts">
import { WORD_SIZE } from "@/settings";
import BoardLetter from "./BoardLetter.vue";

defineProps({
  guess: {
    type: String,
    default: undefined,
  }
});
</script>
