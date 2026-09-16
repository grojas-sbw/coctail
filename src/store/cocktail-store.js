import { defineStore } from 'pinia'
import { cocktails } from '@/data/cocktails'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: cocktails
  }),

  getters: {
    getCocktailById: (state) => {
      return (id) => state.cocktails.find(c => c.id === id)
    }
  }
})
