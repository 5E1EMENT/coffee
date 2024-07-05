import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', () => {
  const cards = ref([])
  const loader = ref(false)

  const getCoffeeData = async function() {
    try {
      const response = await fetch(this.$api + 'coffee/random_coffee')
      return response.json()
    } catch (error) {
      throw new Error(`Error in getCoffeeData: ${error}`)
    }
  }

  const getCoffeePicture = async function() {
    try {
      const response = await fetch(this.$pictures + 'coffeebean')
      return response.url
    } catch (error) {
      throw new Error(`Error in getCoffeePicture: ${error}`)
    }
  }

  const getCoffee = async function() {
    try {
      loader.value = true
      const [coffeeData, url] = await Promise.all([
        getCoffeeData.call(this),
        getCoffeePicture.call(this)
      ])
      const card = { ...coffeeData, url }
      cards.value.push(card)
    } catch (error) {
      throw new Error(`Error in getCoffee: ${error}`)
    } finally {
      loader.value = false
    }
  }

  return { getCoffee, cards, getCoffeeData, loader }
})
