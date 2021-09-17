<template>
	<div class="container recipe">
		<div class="my-5" v-if="loading">
			<Spinner />
		</div>

		<div v-if="recipe">
			<div class="bg-white p-2 layout">
				<div class="main">
					<div class="img">
						<img :src="recipe.image" alt="Food image" />
					</div>
					<a :href="recipe.url" target="_blank" class="btn btn-primary"
						>View Site</a
					>
				</div>
				<div class="details">
					<h1 class="text-primary">{{ recipe.label }}</h1>
					<p>
						Dish Type:
						<span>{{ recipe.dishType[0] }}</span>
					</p>
					<p>
						Cuisine Type:
						<span v-for="val in recipe.cuisineType" :key="val">{{ val }}</span>
					</p>
					<p v-if="recipe.dietLabels">
						Diet Labels:
						<span v-for="val in recipe.dietLabels" :key="val">{{ val }}</span>
					</p>
					<p>
						Calories: <span>{{ Math.round(recipe.calories) }} gr</span>
					</p>
					<p>Health Labels:</p>
					<div class="health-label">
						<span class="badge" v-for="val in healthLabels" :key="val">
							{{ val }}
						</span>
						<span class="text-primary">more...</span>
					</div>
					<p>Digest:</p>
					<div class="digest-label">
						<div class="badge" v-for="val in digests" :key="val">
							<span>
								{{ Math.round(val.total * 10) / 10 }}
								{{ val.unit }}
								{{ val.label }}
							</span>
						</div>
						<span class="text-primary">more...</span>
					</div>
				</div>
			</div>

			<div class="bg-white my-2 p-2">
				<h2>Ingredients</h2>
				<div
					class="bg-light my-1 p-1 ingredients"
					v-for="(ing, index) in recipe.ingredientLines"
					:key="index"
				>
					<div class="text-primary">
						{{ ing }}
					</div>
					<span class="badge badge-primary">
						{{ Math.round(recipe.ingredients[index].weight * 10) / 10 }} gr
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'RecipeDetails',
	props: ['id'],
	components: { Spinner },
	setup(props) {
		const store = useStore()

		const recipe = computed(() => store.state.recipes.recipe)
		const loading = computed(() => store.state.recipes.loading)

		const healthLabels = computed(() => recipe.value.healthLabels.slice(0, 5))

		const digests = computed(() => recipe.value.digest.slice(0, 5))

		onMounted(async () => await store.dispatch('fetchRecipe', props.id))

		return { recipe, loading, healthLabels, digests }
	},
}
</script>
