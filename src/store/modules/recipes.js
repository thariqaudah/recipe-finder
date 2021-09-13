import useApi from '@/hooks/useApi'

const state = () => ({
	recipes: [],
	loading: false,
	alert: null,
})

const getters = {}

const actions = {
	async fetchRecipes({ commit }, keyword) {
		const { api } = useApi(keyword)

		commit('setAlert', null)
		commit('setLoading', true)
		const res = await api.get()
		commit('setRecipes', res.data.hits)
		commit('setLoading', false)
		if (res.data.count === 0) {
			commit('setAlert', {
				text: 'No recipe found. Try again with different keyword',
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
	clearRecipes(state) {
		state.recipes = []
	},
	setLoading(state, bool) {
		state.loading = bool
	},
	setAlert(state, options) {
		state.alert = options
	},
}

export default { state, getters, actions, mutations }
