<template>
  <li :style="{ background: randomColor }">{{ text }}</li>
</template>
<script setup>
import { helpers } from '@/utils/helpers'

const { randomColor } = helpers()
defineProps({
  text: String
})
</script>
<style lang="scss" scoped>
li {
  margin-left: 10px;
  white-space: nowrap;
  padding: 5px;
  border-radius: 3px;

  &:first-child {
    margin-left: 0;
  }
}
</style>
