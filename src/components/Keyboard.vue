<template>
  <div class="flex flex-col gap-3 mt-2">
    <KeyboardRow
      v-for="(row, index) of keyRows"
      :key="index"
    >
      <KeyboardKey
        v-for="key of row"
        :key="key"
        :code="key"
      />
    </KeyboardRow>
  </div>
</template>

<script setup lang="ts">
import KeyboardRow from "./KeyboardRow.vue";
import KeyboardKey from "./KeyboardKey.vue";

const keyRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
] as const;

</script>
