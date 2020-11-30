<template>
  <div id="app" class="min-h-full">
    <header id="nav">
      <navbar/>
    </header>
    <main class="">
      <transition :name="this.transitionName" mode="out-in" appear>
          <router-view />
      </transition>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  components: {
    Navbar
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  mounted () {
    // I'd prefer to use a computed value for the theme directly, but that doesn't seem
    // to work on initial load.
    this.setTheme(this.$store.getters.theme)
  },
  methods: {
    setTheme (theme) {
      if (process.isClient) {
        document.documentElement.className = theme
      }
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.slice('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    '$store.state.theme' (newValue) {
      this.setTheme(newValue)
    }
  }
}
</script>

<style>
html, body {
  scroll-behavior: smooth;
  @apply h-full  dark:bg-rich-black;
}

#app {
  overflow-x: hidden;
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: 0.1s;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: 0.1s;
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%, 0);

}
</style>
