import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', () => {
  let cards = ref([])
  let loader = ref(false)

  function getCoffeeData() {
    try {
      return fetch(this.$api + 'coffee/random_coffee').then((res) => res.json())
    } catch (error) {
      throw new Error(`Error in getCoffeeData: ${error}`)
    }
  }

  function getCoffeePicture() {
    try {
      return fetch(this.$pictures + 'coffeebean').then((res) => res.url)
    } catch (error) {
      throw new Error(`Error in getCoffeePicture: ${error}`)
    }
  }

  async function getCoffee() {
    try {
      loader.value = true
      await Promise.all([getCoffeeData.call(this), getCoffeePicture.call(this)]).then(
        ([coffeeData, url]) => {
          const card = { ...coffeeData, url }
          cards.value.push(card)
        }
      )
    } catch (error) {
      throw new Error(`Error in getCoffee: ${error}`)
    } finally {
      loader.value = false
    }
  }

  return { getCoffee, cards, getCoffeeData, loader }
})
