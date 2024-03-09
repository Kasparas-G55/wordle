<template>
  <h1 class="text-4xl font-bold">
    Wordle
  </h1>
  <Board
    :guesses
    :attempts
  />
  <input
    ref="input"
    v-model="guess"
    class="absolute opacity-0"
    data-test="input"
    :maxlength="WORD_SIZE"
    type="text"
    autofocus
    @blur="onInputBlur"
    @keypress.enter="onInputSumbit"
    @keydown.space.prevent
  />
  <Keyboard @key-press="onKeyPress" />
  <Teleport to="#app">
    <Sonner position="bottom-center" />
    <Dialog v-show="gameState !== undefined && (gameState || !gameState)">
      <DialogContent>
        <h1 v-if="gameState">
          {{ VICTORY_MESSAGE }}
        </h1>
        <h1 v-else>
          {{ DEFEAT_MESSAGE }}
        </h1>
      </DialogContent>
    </Dialog>
  </Teleport>
</template>

<script setup lang="ts">
import words from "@/words.json";
import Board from "@/components/Board.vue";
import Dialog from "@/components/Dialog.vue";
import DialogContent from "@/components/DialogContent.vue";
import Keyboard from "@/components/Keyboard.vue";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE, GUESS_WORD, WORD_SIZE } from "@/settings";
import { onMounted, ref } from "vue";
import { toast } from "vue-sonner";
import Sonner from "./Sonner.vue";

const emit = defineEmits<{
  submit: [];
}>();

const [guess] = defineModel<string>({
  get: () => guesses.value[attempts.value],
  set: (value) => guesses.value[attempts.value] = value.toLowerCase(),
  default: ""
});
const guesses = ref<string[]>([""]);
const attempts = ref(0);
const gameState = ref<boolean>();
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

  guesses.value[attempts.value] += letter.toLowerCase();
}

function onInputBlur(event: Event) {
  const target = event.target as HTMLInputElement;

  target.focus();
}

function onInputSumbit() {
  if (guess.value.length < 5)
    return;

  if (!words.includes(guess.value)) {
    toast("Word not in the list.");
    return;
  }

  if (guess.value === GUESS_WORD) {
    gameState.value = true;
    input.value!.disabled = true;
    return;
  }

  if (attempts.value >= 5) {
    gameState.value = false;
    attempts.value++;
    input.value!.disabled = true;
    return;
  }

  guesses.value.push("");
  attempts.value++;
}
</script>
