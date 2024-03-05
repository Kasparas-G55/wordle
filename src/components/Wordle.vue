<template>
  <h1>Wordle</h1>
  <Board :guess />
  <!-- class="absolute opacity-0" -->
  <input
    ref="input"
    v-model="guess"
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
import { WORD_SIZE } from "@/settings";
import { toRef, onMounted, ref, type PropType } from "vue";

const props = defineProps({
  wordOfTheDay: {
    type: String,
    required: true,
  },
  guesses: {
    type: Array as PropType<string[]>,
    required: true,
  },
  attempts: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits<{
  submit: [],
}>();

const guessesRef = toRef(props.guesses);
const input = ref<HTMLInputElement>();
const guess = ref("");

onMounted(() => {
  // This is needed, because Vue Test Utils doesn't acknowledge 'autofocus' on the input element.
  input.value?.focus();
});

function onKeyPress(letter: string) {
  if (guess.value.length >= WORD_SIZE)
    return;

  guess.value += letter;
}

function onInputBlur(event: Event) {
  const target = event.target as HTMLInputElement;

  target.focus();
}

function onInputSumbit() {
  if (guess.value.length < 5)
    return;

  if (props.attempts >= 6)
    return;

  guessesRef.value.push(guess.value);
}

</script>
