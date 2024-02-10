<template>
  <div class="flex flex-row gap-2">
    <BoardLetter
      v-for="row of 5"
      :key="row"
    />
  </div>
</template>

<script setup lang="ts">
import BoardLetter from "./BoardLetter.vue";
</script>
