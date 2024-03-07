<template>
  <h1>Wordle</h1>
  <Board :guesses />
  <!-- class="absolute opacity-0" -->
  <input
    ref="input"
    v-model="guesses[attempts]"
    test-id="input"
    :maxlength="WORD_SIZE"
    type="text"
    autofocus
    @blur="onInputBlur"
    @keypress.enter="onInputSumbit"
  >
  <Keyboard @key-press="onKeyPress" />
</template>

<script setup lang="ts">
import Board from "@/components/Board.vue";
import Keyboard from "@/components/Keyboard.vue";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE, WORD_SIZE } from "@/settings";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  wordOfTheDay: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  submit: [],
}>();

const guesses = ref<string[]>([""]);
const attempts = ref(0);
const guess = computed<string>(() => guesses.value[attempts.value].toUpperCase());
const input = ref<HTMLInputElement>();

onMounted(() => {
  // This is needed, because Vue Test Utils doesn't acknowledge 'autofocus' on the input element.
  input.value?.focus();
});

function onKeyPress(letter: string) {
  if (letter === "Enter")
    return onInputSumbit();

  if (letter === "Backspace") {
    guesses.value[attempts.value] = guesses.value[attempts.value].slice(0, -1);
    return;
  }

  if (guess.value.length >= WORD_SIZE)
    return;

  guesses.value[attempts.value] += letter;
}

function onInputBlur(event: Event) {
  const target = event.target as HTMLInputElement;

  target.focus();
}

function onInputSumbit() {
  if (guess.value.length < 5)
    return;

  if (guess.value === props.wordOfTheDay) {
    console.log(VICTORY_MESSAGE);
    input.value!.disabled = true;
    return;
  }

  if (attempts.value >= 5) {
    console.log(DEFEAT_MESSAGE);
    attempts.value++;
    input.value!.disabled = true;
    return;
  }

  guesses.value.push("");
  attempts.value++;
}

</script>
