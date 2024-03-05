<template>
  <div class="flex flex-col items-center">
    <Wordle
      :word-of-the-day="wordOfTheDay"
      :guesses
      :attempts
      @submit="attempts++"
    />
  </div>
</template>

<script setup lang="ts">
import Wordle from "./components/Wordle.vue";
import { ref, computed } from "vue";

const wordOfTheDay = ref("");
const guesses = ref<string[]>([]);
const attempts = computed(() => guesses.value.length);

</script>
