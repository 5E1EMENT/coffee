<template >
    <button :disabled="disabled"></button>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps({
    disabled: Boolean,
})
const { disabled } = toRefs(props)

</script>
<style lang="scss">
button {
    width: 150px;
    height: 150px;
    background-color: tomato;
    position: relative;
    border-radius: 50%;

    &:before {
        content: "";
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
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
        width: 75px;
        height: 4px;
        background-color: #fff;
    }
}
</style>