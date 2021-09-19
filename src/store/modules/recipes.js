import useApi from '@/hooks/useApi'

const state = () => ({
  recipes: [],
  recipe: null,
  loading: false,
  alert: null,
})

const getters = {}

const actions = {
  async fetchRecipes({ commit }, keyword) {
    const { api } = useApi(keyword, null)

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
  async fetchRecipe({ commit }, id) {
    const { api } = useApi(null, id)

    try {
      commit('setLoading', true)
      const res = await api.get()
      commit('setRecipe', res.data.recipe)
    } catch (err) {
      console.log(err)
      commit('setAlert', {
        text: 'Recipe is not found',
        type: 'danger',
      })
    }
    commit('setLoading', false)
  },
}

const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes
  },
  setRecipe(state, recipe) {
    state.recipe = recipe
  },
  setLoading(state, bool) {
    state.loading = bool
  },
  setAlert(state, options) {
    state.alert = options
  },
}

export default { state, getters, actions, mutations }
