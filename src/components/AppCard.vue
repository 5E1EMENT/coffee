<template >
    <div class="card">
        <div class="card__header">
            <div class="blur-load" :class="{ 'loaded': showLoader }">
                <img ref="img" loading="lazy" decoding="async" :src="card.url" :alt="card.blend_name" />
            </div>

            <p class="card__intensifier">{{ card.intensifier }}</p>
        </div>
        <div class="card__body">
            <span class="card__origin">{{ card.origin }}</span>
            <h3 class="card__name">{{ card.blend_name }}</h3>
            <span class="card__variety">{{ card.variety }}</span>
            <ul class="card__tags" @wheel="onWheel($event)" ref="cards">
                <AppTag v-for="tag of tagsList" :key="tag" :text="tag" />
            </ul>
        </div>
    </div>
</template>
<script setup>
import { toRefs, computed, ref, onMounted } from 'vue'
import AppTag from '@/components/AppTag.vue'
const props = defineProps({
    card: Object,
})

const { card } = toRefs(props)
const cards = ref(null)
const img = ref(null)
const showLoader = ref(false)
const tagsList = computed(() => card.value.notes.split(',').map(item => item.replace(' ', '')))

const onWheel = (e) => e.deltaY > 0 ? cards.value.scrollLeft += 20 : cards.value.scrollLeft -= 20

onMounted(() => {
    img.value.addEventListener('load', () => {
        showLoader.value = true
    })
})

</script>
<style lang="scss">
.card {
    width: 225px;
    min-height: 350px;
    border-radius: 5px;
    background-color: white;
    position: relative;

    &__intensifier {
        position: absolute;
        right: 10px;
        top: 10px;
        color: white;
        text-shadow: 1px 0 1px #000,
            0 1px 1px #000,
            -1px 0 1px #000,
            0 -1px 1px #000;
    }

    &__body {
        padding: 5px 10px;
        font-size: 12px;
    }

    &__origin {
        color: #ccc;
    }

    &__name {
        font-size: 16px;
        font-weight: bold;
    }

    &__tags {
        list-style-type: none;
        padding-left: 0;
        display: flex;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        &:first-child {
            margin-left: 0;
        }
    }
}

img {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
}
</style>