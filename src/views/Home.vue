<template>
  <div class="container">
    <Search />
    <Recipes />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Recipes from '@/components/Recipes.vue'

export default {
  name: 'Home',
  components: { Search, Recipes },
}
</script>
