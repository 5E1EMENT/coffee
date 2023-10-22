import { describe, beforeEach, it, expect, vitest } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { useCoffeeStore } from '@/stores/coffee'
import App from '@/App.vue'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn
          })
        ]
      }
    })
  })

  it('Call the initial request getCoffee', async () => {
    const store = useCoffeeStore()
    expect(store.getCoffee).toHaveBeenCalledOnce()
  })

  it('Call request getCoffee on AppButton click', async () => {
    const store = useCoffeeStore()
    await wrapper.find('button').trigger('click')
    expect(store.getCoffee).toHaveBeenCalled()
  })
})
