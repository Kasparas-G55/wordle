<template>
  <div
    class="font-bold px-3 py-5 capitalize"
    :class="keys[code] ? 'bg-red-300' : 'bg-gray-300'"
  >
    {{ code }}
  </div>
</template>

<script setup lang="ts">

import { useMagicKeys } from "@vueuse/core";

const keys = useMagicKeys({ reactive: true });

defineProps({
  code: {
    type: String,
    required: true,
  },
});

</script>
