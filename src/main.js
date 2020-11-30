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

  let theme = 'light'
  if (process.isClient) {
    theme = localStorage.getItem('theme') || 'light'
  }

  appOptions.store = new Vuex.Store({
    state: {
      theme: theme
    },
    mutations: {
      toggleTheme (state) {
        state.theme = state.theme === 'dark' ? 'light' : 'dark'

        if (process.isClient) {
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
