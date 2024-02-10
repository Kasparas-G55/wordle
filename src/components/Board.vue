
<template>
  <div class="flex flex-col gap-2">
    <BoardRow
      v-for="row of 6"
      :key="row"
    />
  </div>
</template>

<script setup lang="ts">
import BoardRow from "./BoardRow.vue";
</script>
