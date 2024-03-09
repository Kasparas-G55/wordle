<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from "vue-sonner";

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        title: 'group toast group-[.toaster]:text-white',
        toast: 'group toast group-[.toaster]:bg-gray-700 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
      },
    }"
  />
</template>
