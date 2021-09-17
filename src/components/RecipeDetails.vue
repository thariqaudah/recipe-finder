<template>
  <div class="container recipe">
    <div class="bg-white">
      <div class="cover">
        <img class="img" :src="recipe.recipe.image" alt="Food image" />
      </div>
      <h1 class="text-primary fs-lg">{{ recipe.recipe.label }}</h1>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'RecipeDetails',
  props: ['id'],
  setup(props) {
    const store = useStore()

    const recipe = computed(() =>
      store.getters.getSingleRecipe(parseInt(props.id))
    )

    console.log(recipe.value)

    return { recipe }
  },
}
</script>

<style></style>
