<script setup>
import { onMounted, computed, onUnmounted } from 'vue'
import { useCoffeeStore } from '@/stores/coffee'
import AppCard from '@/components/AppCard.vue'
import AppButton from '@/components/AppButton.vue'

const SECONDS = 30
const INTERVAL_TIME = 1000 * SECONDS
const store = useCoffeeStore()
const cards = computed(() => store.cards)
const loader = computed(() => store.loader)

const addCard = () => {
  store.getCoffee()
  clearInterval(interval)
  interval = setInterval(() => {
    addCard()
  }, INTERVAL_TIME)
}

let interval = setInterval(() => {
  addCard()
}, INTERVAL_TIME)

onMounted(async () => await store.getCoffee())

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <main>
    <transition-group name="list">
      <AppCard v-for="card of cards" :card="card" :key="card.id" />
    </transition-group>
    <AppButton @click="addCard" :loading="loader" />
  </main>
</template>

<style>
body {
  background-color: #2631aa;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  column-gap: 30px;
  row-gap: 40px;
  margin: 0 auto;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
