<template>
  <button :disabled="loading" :class="{ loading: loading }"></button>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  loading: Boolean
})
const { loading } = toRefs(props)
</script>
<style lang="scss" scoped>
button {
  width: 150px;
  height: 150px;
  background-color: tomato;
  position: relative;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
    height: 4px;
    background-color: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 75px;
    height: 4px;
    background-color: #fff;
  }

  &.loading {
    &:before {
      content: 'Loading...';
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &::after {
      content: none;
    }
  }
}
</style>
