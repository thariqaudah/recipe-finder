<template>
	<div class="container">
		<div class="recipes" v-if="recipes.length">
			<div
				class="bg-white p-1"
				v-for="data in recipes"
				:key="data.recipe.yield"
			>
				<div class="img">
					<img :src="data.recipe.image" alt="food image" />
				</div>
				<h2 class="my-1">
					{{ data.recipe.label }}
				</h2>
				<router-link
					:to="{ name: 'RecipeDetails', params: { id: data.id } }"
					class="btn btn-dark"
					>Details</router-link
				>
			</div>
		</div>
		<div v-if="alert">
			<Alert :text="alert.text" :type="alert.type" />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Alert from './Alert.vue'

export default {
	name: 'Recipes',
	components: { Alert },
	setup() {
		const store = useStore()

		const recipes = computed(() => store.state.recipes.recipes)
		const alert = computed(() => store.state.recipes.alert)

		return { recipes, alert }
	},
}
</script>
