<template>
  <div class="container">
    <div v-if="recipes.length">
      <h1 class="my-2">Food List</h1>
      <div class="recipes">
        <div
          class="bg-white p-1"
          v-for="recipe in recipes"
          :key="recipe.recipe.yield"
        >
          <div class="img">
            <img :src="recipe.recipe.image" alt="food image" />
          </div>
          <h2 class="my-1">
            {{ recipe.recipe.label }}
          </h2>
          <router-link to="" class="btn btn-dark">Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Recipes',
  setup() {
    const store = useStore()

    const recipes = computed(() => store.state.recipes.recipes)

    return { recipes }
  },
}
</script>
