<template>
	<div class="container">
		<Search />
		<Spinner v-if="loading" />
		<Recipes v-else />
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Search from '@/components/Search.vue'
import Recipes from '@/components/Recipes.vue'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'Home',
	components: { Search, Recipes, Spinner },
	setup() {
		const store = useStore()

		const loading = computed(() => store.state.recipes.loading)

		return { loading }
	},
}
</script>
