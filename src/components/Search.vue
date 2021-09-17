<template>
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Search your favorite foods..."
        v-model="keyword"
      />
      <button type="submit" class="btn btn-dark btn-block my-1">Search</button>
      <button
        type="button"
        class="btn btn-block"
        v-if="recipes.length"
        @click="clearRecipes"
      >
        Clear
      </button>
    </form>
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

    const recipes = computed(() => store.state.recipes.recipes)

    const onSubmit = async () => {
      if (!keyword.value) {
        store.commit('setAlert', {
          text: 'Please enter some keyword!',
          type: 'danger',
        })
        return
      }

      const res = await store.dispatch('fetchRecipes', keyword.value)
      if (res.status !== 200) {
        console.log('error')
      }
      keyword.value = ''
    }

    const clearRecipes = () => store.commit('setRecipes', [])

    return { keyword, recipes, onSubmit, clearRecipes }
  },
}
</script>
