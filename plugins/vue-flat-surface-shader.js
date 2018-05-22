import Vue from 'vue'
import FlatSurfaceShader from 'vue-flat-surface-shader'

if (process.client) {
    Vue.use(FlatSurfaceShader)
}