<template>
  <div class="container">
    <div class="alert" :class="'alert-' + type">
      <span v-if="type === 'danger'">
        <i class="bi bi-exclamation-circle"></i>
      </span>
      <span v-else>
        <i class="bi bi-info-circle"></i>
      </span>
      {{ text }}
      <span class="close" @click="closeAlert">
        <i class="bi bi-x"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  setup() {
    const store = useStore()

    const closeAlert = () => {
      store.commit('setAlert', null)
    }

    return { closeAlert }
  },
}
</script>

<style scoped>
.close {
  display: block;
  float: right;
  cursor: pointer;
}
</style>
