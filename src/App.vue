<template>
  <div class="flex flex-col items-center">
    <Wordle :word-of-the-day="wordOfTheDay" />
  </div>
</template>

<script setup lang="ts">
import Wordle from "./components/Wordle.vue";

const wordOfTheDay = "TESTS";

</script>
