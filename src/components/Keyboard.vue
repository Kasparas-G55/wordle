<template>
  <div
    id="keyboard"
    class="flex flex-col gap-3 mt-2"
  >
    <KeyboardRow
      v-for="(row, index) of keyRows"
      :key="`keyRow-${index}`"
    >
      <KeyboardKey
        v-for="key of row"
        :key="key"
        :data-test="key"
        :letter="key"
        @click="emit('keyPress', key)"
      >
        <Backspace v-if="key === 'Backspace'" />
        <template v-else>
          {{ key.toUpperCase() }}
        </template>
      </KeyboardKey>
    </KeyboardRow>
  </div>
</template>

<script setup lang="ts">
import KeyboardRow from "./KeyboardRow.vue";
import KeyboardKey from "./KeyboardKey.vue";
import Backspace from "./Backspace.vue";

const keyRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
] as const;

const emit = defineEmits<{
  keyPress: [key: string];
}>();
</script>
