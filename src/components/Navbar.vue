<template>
  <nav class="navbar">
    <h1>
      <i class="bi bi-search"></i>
      Recipe Finder
    </h1>

    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
