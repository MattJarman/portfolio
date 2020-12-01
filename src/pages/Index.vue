<template>
  <Layout>
    <section class="flex flex-col px-4 pt-32 h-view-minus-nav sm:pt-64">
      <div class="container flex flex-col flex-grow h-full mx-auto mb-16">
        <p class="text-4xl font-bold sm:text-6xl dark:text-green-400">Matthew Jarman</p>
        <p class="mb-4 text-2xl font-bold text-gray-500 dark:text-gray-300 sm:text-4xl">
          Software Developer
        </p>
        <g-link
            to="/portfolio"
            class="w-24 px-4 py-2 font-bold text-center text-white shadow-md bg-green-500 hover:bg-green-600"
        >
          Portfolio
        </g-link>
      </div>
      <div class="flex justify-center">
        <span class="focus:outline-none cursor-pointer" @click="scrollTo('about')">
          <font-awesome-icon class="outline-non text-green-500 text-6xl animate-bounce" :icon="['fa', 'angle-down']"/>
        </span>
      </div>
    </section>
    <section id="about" class="flex flex-col px-4 h-view bg-gray-50 dark:bg-rich-black">
      <div class="container flex flex-col flex-grow mx-auto md:px-8">
        <div class="flex flex-col items-center flex-grow lg:flex-row">
          <div class="text-gray-700 dark:text-gray-300">
            <p class="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl dark:text-green-400">
              About Me
            </p>
            <p class="mb-4 text-base md:text-xl">
              Hey! I'm Matt, a software developer from North Wales, UK.
            </p>
            <p class="mb-4 text-base md:text-xl">
              I enjoy finding efficient solutions to complex problems,
              and creating useful applications that can help make
              people's lives easier.
            </p>
            <p class="text-base md:text-xl">
              After graduating from
              <a
                  class="text-green-400 no-underline hover:underline"
                  href="https://www.bangor.ac.uk/"
                  target="_blank"
              >
                Bangor University
              </a>
              , I began my current job as a Graduate Developer working
              on developing and maintaining APIs for our partners.
            </p>
          </div>
          <div class="flex items-center justify-center flex-grow w-full lg:ml-24">
            <g-image
                class="w-1/2 h-auto mx-8 my-4 mb-8 rounded-full shadow-md sm:mx-16 md:w-72 md:h-72 lg:mb-0"
                :src="require('!!assets-loader!@images/me.jpg')"
                alt="Me"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <a class="focus:outline-none cursor-pointer" @click="scrollTo('skills')">
          <font-awesome-icon class="outline-non text-green-500 text-6xl animate-bounce" :icon="['fa', 'angle-down']"/>
        </a>
      </div>
    </section>
    <section id="skills" class="flex flex-col px-4 h-view">
      <div class="container flex flex-col flex-grow mx-auto w-full lg:w-2/3 md:px-8">
        <div class="flex flex-col">
          <p class="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl dark:text-green-400">
            Skills
          </p>
        </div>
        <div class="flex flex-col flex-grow lg:flex-row">
          <div class="flex flex-grow flex-wrap justify-between">
            <skill
                v-for="skill in $page.skills.edges"
                :key="skill.node.name"
                :name="skill.node.name"
                :level="skill.node.level"
                :icon="skill.node.icon"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <span @click="scrollToTop" class="focus:outline-none cursor-pointer">
          <font-awesome-icon class="outline-none text-green-500 text-6xl animate-bounce" :icon="['fa', 'angle-up']"/>
        </span>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  skills: allSkills(sortBy: "level") {
    edges {
      node {
        name
        level
        icon
      }
    }
  }
}
</page-query>

<script>
import Skill from '~/components/Skill'

export default {
  name: 'About',
  components: {
    Skill
  },
  metaInfo: {
    title: 'About Me'
  },
  mounted () {
    this.updateViewportHeight()
  },
  created () {
    if (process.isClient) {
      window.addEventListener('resize', this.updateViewportHeight)
    }
  },
  beforeDestroy () {
    if (process.isClient) {
      window.removeEventListener('resize', this.updateViewportHeight)
    }
  },
  methods: {
    updateViewportHeight () {
      if (process.isClient) {
        const windowHeight = window.innerHeight
        const headerHeight = document.getElementById('nav').clientHeight

        document.documentElement.style.setProperty('--navbarHeight', `${headerHeight}px`)
        document.documentElement.style.setProperty('--viewportHeight', `${windowHeight}px`)
      }
    },
    scrollToTop () {
      if (process.isClient) {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    },
    scrollTo (id) {
      if (process.isClient) {
        const element = document.getElementById(id)

        if (!element) {
          return
        }

        element.scrollIntoView()
      }
    }
  }
}
</script>

<style scoped>
:root {
  --viewportHeight: 100vh;
  --navbarHeight: 0vh;
}

.h-view {
  min-height: var(--viewportHeight, 100vh);
}

.h-view-minus-nav {
  min-height: calc(var(--viewportHeight, 100vh) - var(--navbarHeight, 0vh));
}
</style>
