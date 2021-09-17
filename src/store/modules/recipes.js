import useApi from '@/hooks/useApi'

const state = () => ({
  recipes: [],
  loading: false,
  alert: null,
})

const getters = {
  getSingleRecipe: state => id => {
    return state.recipes.find(recipe => recipe.recipe.yield === id)
  },
}

const actions = {
  async fetchRecipes({ commit }, keyword) {
    const { api } = useApi(keyword)

    commit('setAlert', null)
    commit('setLoading', true)

    const res = await api.get()
    const recipes = res.data.hits.map(data => {
      const indexId = data.recipe.uri.indexOf('recipe')
      const id = data.recipe.uri.substr(indexId)
      return {
        ...data,
        id,
      }
    })

    commit('setRecipes', recipes)
    commit('setLoading', false)

    if (res.data.count === 0) {
      commit('setAlert', {
        text: 'No recipe is found. Try again with different keyword',
        type: 'default',
      })
    }
    return res
  },
}

const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes
  },
  setLoading(state, bool) {
    state.loading = bool
  },
  setAlert(state, options) {
    state.alert = options
  },
}

export default { state, getters, actions, mutations }
