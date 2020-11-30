import Vuex from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DefaultLayout from '~/layouts/Default.vue'
import './tailwind.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  library.add(faUser, faGithub, faAngleDown, faAngleUp, faSun, faMoon)

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      theme: process.isClient
        ? localStorage.getItem('theme')
        : 'light'
    },
    mutations: {
      toggleTheme (state) {
        if (process.isClient) {
          state.theme = state.theme === 'dark' ? 'light' : 'dark'
          localStorage.setItem('theme', state.theme)
        }
      }
    },
    getters: {
      theme (state) {
        return state.theme
      }
    }
  })
}
