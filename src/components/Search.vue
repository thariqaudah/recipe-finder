<template>
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Search your favorite foods..."
        v-model="keyword"
      />
      <input type="submit" value="Search" class="btn btn-dark my-1" />
      <input type="button" value="Clear" class="btn" v-if="recipes.length" />
    </form>
    <p v-if="isLoading">Searching...</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Search',
  setup() {
    const keyword = ref('')

    const store = useStore()

    const isLoading = computed(() => store.state.recipes.loading)
    const recipes = computed(() => store.state.recipes.recipes)

    const onSubmit = async () => {
      const res = await store.dispatch('fetchRecipes', keyword.value)
      if (res.status !== 200) {
        console.log('error')
      }
      console.log('ok')
      keyword.value = ''
    }

    return { keyword, isLoading, recipes, onSubmit }
  },
}
</script>
