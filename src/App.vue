<template>
  <div id="app" class="min-h-full" :class="theme">
    <header id="nav">
      <navbar/>
    </header>
    <main class="dark:bg-rich-black">
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
  computed: {
    theme () {
      console.log(this.$store.getters.theme)
      return this.$store.getters.theme
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.slice('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
html, body {
  scroll-behavior: smooth;
  @apply h-full;
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
