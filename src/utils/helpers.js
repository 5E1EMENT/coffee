import { computed } from 'vue'

export function helpers() {
    const r = () => Math.floor(256 * Math.random());

    const randomColor = computed(() => `rgb(${r()}, ${r()}, ${r()})`)

    return { randomColor }
}