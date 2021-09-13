import useApi from '@/hooks/useApi'

const state = () => ({
  recipes: [],
  loading: false,
})

const getters = {}

const actions = {
  async fetchRecipes({ commit }, keyword) {
    const { api } = useApi(keyword)

    commit('setLoading', true)
    const res = await api.get()
    commit('setRecipes', res.data.hits)
    commit('setLoading', false)
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
}

export default { state, getters, actions, mutations }
