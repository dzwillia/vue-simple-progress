import VueSimpleProgress from './components/Progress.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-progress', VueSimpleProgress)
}

export { VueSimpleProgress }

export default VueSimpleProgress
