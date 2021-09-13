import { createStore, createLogger } from 'vuex'
import recipes from './modules/recipes'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    recipes,
  },
  plugins: debug ? [createLogger()] : [],
})
