// vite.config.js
import vitePluginString from 'vite-plugin-string'


//Attention, la doc indique qu'il faut écrire "plugins: [ vitePluginString() ]" mais ça ne marche pas "Error: vitePluginString is not a function"
export default {
  plugins: [
    vitePluginString.default()
  ]
}