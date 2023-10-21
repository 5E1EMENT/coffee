<template >
    <li :style="{ background: randomColor }">{{ text }}</li>
</template>
<script setup>
import { toRefs } from 'vue'
import { helpers } from '@/utils/helpers'

const { randomColor } = helpers()
const props = defineProps({
    text: String,
})
const { text } = toRefs(props)
</script>
<style lang="scss">
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